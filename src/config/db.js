import mysql from 'mysql2/promise';
import 'dotenv/config.js';


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

try{
    const conn = await pool.getConnection();
    conn.release(); 
    console.log('Conectado ao banco de dados MySQL!');

}catch(err){
    console.log(err);
}

export default pool;
