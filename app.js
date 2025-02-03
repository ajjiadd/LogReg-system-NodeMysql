const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({path: './.env'})

const app = express();

// connection with database 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "logreg"
});

//database check error and connection 
db.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("connected to database");
    }
})


app.get("/", (req, res)=>{
    res.send("<h1>Home Page</h1>");
});


app.listen(3500, ()=>{
    console.log("Server started on port 3500")
});