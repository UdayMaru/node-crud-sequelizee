const express = require("express");
const sequelize = require("sequelize");

const studentRoute = require("./studentRoute");
const app = express();
const PORT = 81;
app.use(express.json());
app.use("/student",studentRoute);

app.listen(PORT,()=>{
    console.log("server is localhost"+PORT);
});