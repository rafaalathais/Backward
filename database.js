const mysql = require('mysql2')
require('dotenv').config();


const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

conexao.connect((error) =>{
 if(error){
    console.error('Erro ao conectar ao banco de dados:',error)
    return;
}
   console.log('Conectado ao banco de dados MySQL')
})

module.exports = conexao