const sequelize = require("sequelize");
const db = require("./db");

const student = db.define("student",{
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:sequelize.STRING,
        allowNull:false,
    },
    city:{
        type:sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:sequelize.STRING,
        unique:true,
    },
});

db.sync()
    .then(()=>{
        console.log("table created");

    })
    .catch((err)=>{
        console.error("unable to create table:",err);
    });
module.exports=student;
