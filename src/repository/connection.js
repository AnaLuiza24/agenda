import mysql from 'mysql2/promise';

const conexao = await mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DB,
    password: process.env.PWD,
    user: process.env.USER
})

export default conexao;

