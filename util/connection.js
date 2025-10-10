import mysql from 'mysql2';

const host = "localhost";
const username = "root";
const password = "1234";
const database = "biblioteca";
const port = "3309";

let config = {
    host: host,
    user: username,
    password: password,
    database: database,
    port: port
}

export const connection = mysql.createConnection(config);

connection.connect((error) =>{
   if(error) throw error;
   console.log("Banco de dados conectado com sucesso!");

   connection.close();
});