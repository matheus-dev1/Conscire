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



const { response } = require("express");
const connection = require('./Index/config/database');
const database = connection();


//Middlewares
    server.use(cors({
        origin:['http://localhost:3000'],
        methods: ['GET', 'POST'],
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
                    console.log(req.session.user[0].NOME)

                    res.json({auth: true, token: token, results: results})
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
    
    const q1 =parseInt(req.body.select);
    const q2 =parseInt(req.body.select2);
    const q3 = parseInt(req.body.select3);
    const q4 = parseInt(req.body.select4);    
    const q5 = parseInt(req.body.select5); 
    const q6 = parseInt(req.body.select6); 
    const q7 = parseInt(req.body.select7); 
    const q8 = parseInt(req.body.select8); 
    const q9 = parseInt(req.body.select9); 
    const q10 = parseInt(req.body.select10); 
    
    var resultado = q1+q2+q3+q4+q5+q6+q7+q8+q9+q10;
   
    const sql = `UPDATE login SET audit = '${resultado}' WHERE email='${EmailSession}'`; 
    database.query(sql, (error, results) =>{
   
        const newLocal = "Resultado do teste Audit foi atualizado";
        res.json({auth: false, message: newLocal})
    })
})

server.get('/audit/retorna', function(req,res){ 
    
    const sql = `SELECT audit FROM login WHERE email='${EmailSession}'`;
    database.query(sql, (error, resultado) =>{
       
        if (resultado[0].audit <= 7){
            res.json("ZONA I: Pessoas que se localizam na ZONA I geralmente fazem uso de baixo risco de álcool ou são abstêmias. De uma forma geral, são pessoas que bebem menos de duas doses-padrão por dia ou que não ultrapassam a quantidade de cinco doses-padrão em uma única ocasião. A intervenção adequada nesse nível é a educação em saúde, para que haja a manutenção do padrão de uso atual.");
        }
        else if (resultado[0].audit>= 8 && resultado[0].audit <= 15){
            res.json("ZONA II: Pessoas que pontuam nessa zona são consideradas usuários de risco; são pessoas que fazem uso acima de duas doses-padrão todos os dias ou mais de cinco doses-padrão numa única ocasião, porém não apresentam nenhum problema decorrente disso. A intervenção adequada nesse nível é a Orientação Básica sobre o uso de baixo risco e sobre os possíveis riscos orgânicos, psicológicos ou sociais que o usuário pode apresentar se mantiver esse padrão de uso.");
        }
        else if (resultado[0].audit >= 16  && resultado[0].audit <= 19 ){
            res.json("ZONA III: Nessa zona de risco estão os usuários com padrão de uso nocivo; ou seja, pessoas que consomem álcool em quantidade e frequência acima dos padrões de baixo risco e já apresentam problemas decorrentes do uso de álcool. Por outro lado, essas pessoas não apresentam a quantidade de sintomas necessários para o diagnóstico de dependência. A intervenção adequada nesse nível é a utilização.");
        }
            
        else if (resultado[0].audit  >= 20){
            res.json('ZONA IV: Pessoas que se encontram nesse nível apresentam grande chance de ter um diagnóstico de dependência. Nesse caso, é preciso fazer uma avaliação mais cuidadosa e, se confirmado o diagnóstico, deve-se motivar o usuário a procurar atendimento especializado para acompanhamento e encaminhá-lo ao serviço adequado.');
        }             
    })            
});

server.listen(5000, ()=>{ //Indica qual porta o server irá rodar.
    console.log("Server on")
})
