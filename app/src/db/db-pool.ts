import mysql = require("mysql");

export const pool = mysql.createPool({
    host:"localhost",
    port:3306,
    database:"JDBC",
    user:"root",
    password:"root",
    connectionLimit: 10
});