const express = require("express"), //IMPORTAÇÕES: EXPRESS, CORS, MYSQL
    server = express(),
    cors = require("cors"),
    mysql = require("mysql");
    bcrypt = require('bcrypt');
    bodyParser = require('body-parser');
    cookie = require('cookie-parser');
    session = require('express-session');
    jwt = require('jsonwebtoken')

const saltRounds = 10


const {check, validationResult } = require("express-validator");
const { response } = require("express");
const connection = require('./Index/config/database');
const database = connection();


//Middlewares
    server.use(cors({
        origin:['http://localhost:3000'],
        methods: ['GET', 'POST', 'PUT'],
        credentials: true
    })); //Permite a leitura de fontes externas

    server.use(cookie())

    server.use(bodyParser.urlencoded({extended: true}));

    server.use(express.json()); //Lê dados em json

//Session
    server.use(session({
        key: 'userId',
        secret: 'conscire',
        resave: false,
        saveUninitialized: false,
        cookie:{
            expires: 60 * 60 * 24,
        },
    }))

//Construção de rotas:



server.get("/", (req, res) =>{ //Raiz
    res.end("<html><h1> Hello world </h1> </html>")
})

server.post('/register', [ 
    check('nome', 'Nome é obrigatório com pelo menos 3 caracteres').exists().isLength({min:3}),
    check('nome', 'Nome não permite dígitos numéricos').isAlpha(),
    check('email', 'Email é obrigatório').isEmail().normalizeEmail(),
    check('senha', 'A senha precisa ter no mínimo 5 dígitos e no máximo 8!').exists().isLength({min:5,max:8}),
    check('confirme', 'A senha precisa ser igual a digitada anteriormente!').exists().isLength({min:5,max:8}),
], (req, res) =>{
    const nome = req.body.nome;
    const email = req.body.email;
    const senha= req.body.senha;
    const confirme= req.body.confirme;
    var errors = validationResult(req);
        if(!errors.isEmpty()){
            res.json({auth: false, validacao:errors, dados: [nome, email, senha]})
            console.log(errors);
            return;
        }
    if(senha==confirme){
        bcrypt.hash(senha, saltRounds, (error, hash)=>{
            if(error){
                console.log(error)
            }
            const sql = (`SELECT * FROM login WHERE email = '${email}'`)
            database.query(sql, (error, results)=>{
                if(error){
                    console.log(error)
                    res.send({error: error})
                }if (results.length > 0){
                    bcrypt.compare(senha, results[0].SENHA, (errors, response)=>{
                        if(response){
                            const id = results[0].ID
                            const token = jwt.sign({id}, "jwtSecret", {
                                expiresIn: 300,
                            })
                            req.session.user = results;
                            console.log(req.session.user[0].EMAIL)

                            res.json({auth: false, validacao:errors,  token: token, results: results})
                            
                        }else{
                            res.json({auth: false, validacao:errors, message: "Email já cadastrado!"})
                        }
                    })
                }else{
                    const sql = `INSERT INTO login (NOME, EMAIL, SENHA) values ('${nome}', '${email}', '${hash}')`;
                    database.query(sql, (error, results) =>{    
                        const newLocal = "Cadastro realizado com sucesso";
                        res.json({auth: false, validacao:errors, message: newLocal})
                    })
                }
            })
        })
    }else{
        const newLocal = "As senhas estão diferentes";
        res.json({auth: false, validacao:errors, message: newLocal})
        console.log('As senhas estão diferentes')  
    }
})





server.post('/login', (req, res) =>{
    const email = req.body.email;
    const senha= req.body.senha;

    const sql = (`SELECT * FROM login WHERE email = '${email}'`)
    database.query(sql, (error, results)=>{
        if(error){
            console.log(error)
            res.send({error: error})
        }if (results.length > 0){
            bcrypt.compare(senha, results[0].SENHA, (error, response)=>{
                if(response){
                    
                    const id = results[0].ID
                    const token = jwt.sign({id}, "jwtSecret", {
                        expiresIn: 300,
                    })

                    req.session.user = results;
                    EmailSession = req.session.user[0].EMAIL
                    console.log(req.session.user[0].NOME)

                    res.json({auth: true, token: token, results: EmailSession})                         
                }else{
                    res.json({auth: false, message: "Senha errada!"})
                }
            })
        }else{
            res.json({auth: false, message: "Este usuário não existe"})
        }
    })
})

const verifyJWT = (req, res, next)=>{
    const token = req.headers['x-acess-token'];

    if(!token){
        res.send("Você não está logado")
    }else{
        jwt.verify(token, "jwtSecret", (err, decoded)=>{
            if(err){
                res.json({auth: false, message: "Falha na autenticação"})
            }else{
                req.userId = decoded.ID;
                next();
            }
        })
    }
}

server.get('/isUserAuth', verifyJWT, (req, res)=>{
    res.send("Usuário autenticado com sucesso, boas vindas ao Projeto Conscire!")
})

server.get('/login', (req, res)=>{
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false})
    }
})







server.get('/comentarios/retorna', (req, res)=>{
    const sql = "SELECT * FROM  comentarios;";
    database.query(sql, (error, results) =>{
        res.json(results)  
    })
})

server.get('/comentarios/envia', (req, res)=>{
    res.json( {auth: false, validacao:{errors:{},}, dados:{}});  
})

server.post('/comentarios/envia', [ 
    check('nome', 'Nome é obrigatório com pelo menos 3 caracteres').exists().isLength({min:3}),
    check('nome', 'Nome não permite dígitos numéricos').isAlpha(),
    check('sobrenome', 'Sobrenome é obrigatório com pelo menos 3 caracteres').exists().isLength({min:3}),
    check('sobrenome', 'Sobrenome não permite dígitos numéricos').isAlpha(),
    check('msg', 'A mensagem precisa ter pelo menos 3 caracteres').exists().isLength({min:3}),
], (req, res)=>{
    const {nome, sobrenome, msg} = req.body; //Desestruturação do corpo da requisiçao em dois elementos que iremos enviar ao bd
    var errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({auth: false, validacao:errors, dados: [nome, sobrenome, msg]})
        console.log(errors);
        return;
    }
    const sql = `INSERT INTO comentarios (nome, sobrenome, msg) values ('${nome}', '${sobrenome}', '${msg}')`;
    database.query(sql, (error, results) =>{
        const newLocal = "Agradecemos pela mensagem!!";
        res.json({auth: false, validacao:errors, message: newLocal})

    })
    
})

server.put('/audit/atualiza', (req, res) =>{
    
    const q1 =parseInt(req.body.q1);
    const q2 =parseInt(req.body.q2);
    const q3 = parseInt(req.body.q3);
    const q4 = parseInt(req.body.q4);    
    const q5 = parseInt(req.body.q5); 
    const q6 = parseInt(req.body.q6); 
    const q7 = parseInt(req.body.q7); 
    const q8 = parseInt(req.body.q8); 
    const q9 = parseInt(req.body.q9); 
    const q10 = parseInt(req.body.q10); 
    const email = req.body.email;
    
    
    var resultado = q1+q2+q3+q4+q5+q6+q7+q8+q9+q10;
    console.log(resultado)
    console.log(email)    
   
    const sql = `UPDATE login SET AUDIT = '${resultado}' WHERE EMAIL='${email}'`; 
        database.query(sql, (error, results) =>{
            if(error){
                console.log(error)
            }
        console.log(results)
        const newLocal = "Resultado do teste Audit foi atualizado";
        res.json({auth: true, message: newLocal})
       
    })
    
 
})



server.listen(5000, ()=>{ //Indica qual porta o server irá rodar.
    console.log("Server on")
})
