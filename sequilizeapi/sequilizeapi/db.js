const sequelize = require("sequelize");

const db = new sequelize("mca","root","",{
    host:"localhost",
    dialect:"mysql",
});

db.authenticate()
    .then(()=>{
        console.log("connection has been established successfully");
 })
 .catch((err)=>{
    console.error("unable to connect to the database:",err);
 
 });

 module.exports = db;