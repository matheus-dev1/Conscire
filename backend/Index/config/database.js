const mysql = require('mysql');
module.exports = function(){
    return mysql.createConnection({ //Criando conexão com banco
        host: "sql306.epizy.com",
        user: "epiz_27045662",
        password: "TzXuese1cHBric",
        database: "epiz_27045662_conscire"
    });
}