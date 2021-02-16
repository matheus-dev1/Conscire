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

server.post('/register', (req, res) =>{
    const nome = req.body.nome;
    const email = req.body.email;
    const senha= req.body.senha;

    bcrypt.hash(senha, saltRounds, (error, hash)=>{
        if(error){
            console.log(error)
        }
        const sql = `INSERT INTO login (NOME, EMAIL, SENHA) values ('${nome}', '${email}', '${hash}')`;
        database.query(sql, (error, results) =>{
            if(error){
                console.log(error);
            }res.json(results)
        })  
    })
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
                    res.json({auth: false, message: "Senha errada, burro"})
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
        res.send("Você não está logado, nos dÊ o token")
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
    res.send("Salve, vc está autenticado")
})

server.get('/login', (req, res)=>{
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false})
    }
})


server.get('/comentarios', (req, res)=>{
    const sql = "SELECT * FROM  recodepro.comentarios;";
    database.query(sql, (error, results) =>{
        if(error){
            return error;
        }res.json(results)
    })
})

server.post('/comentarios', (req, res)=>{
    const {nome, msg} = req.body; //Desestruturação do corpo da requisiçao em dois elementos que iremos enviar ao bd
    const sql = `INSERT INTO comentarios (nome, msg) values ('${nome}', '${msg}')`;
    database.query(sql, (error, results) =>{
        if(error){
            return error;
        }res.json(results)
    })

})


server.listen(5000, ()=>{ //Indica qual porta o server irá rodar.
    console.log("Server on")
})
