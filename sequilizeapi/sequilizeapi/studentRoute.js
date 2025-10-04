const express = require("express");
const Router = express.Router();
const studentcontroller = require("./studentcontroller.js");

Router.get("/index",studentcontroller.index);
Router.get("/show/:id",studentcontroller.show);
Router.post("/store",studentcontroller.store);
Router.put("/update/:id",studentcontroller.update);
Router.delete("/delete/:id",studentcontroller.delete);

module.exports=Router;