const student = require("./student");

exports.index = (req, res) => {
    student.findAll()
    .then((students) => {
        res.send({ message: "Students retrieved successfully", data: students });
    })
    .catch((error) => {
        res.send({ message: "Error retrieving students", error });
    });
};

exports.show = (req,res)=>{
    const id=req.params.id;
    student.findByPk(id)
    .then(student=>{
        if(student){
            res.send({message:"student details",data:student});
        }
        else{
            res.send({message:"student not found"});
        }
    })
    .catch(err=>{
        res.send({message:"error",error:err});
    });
}

exports.store = (req, res) => {
    student.create(req.body)
    .then((newStudent) => {
        res.send({ message: "Student created successfully", data: newStudent });
    })
    .catch((error) => {
        res.send({ message: "Error creating student", error });
    });
};

exports.update = (req, res) => {
    student.update(req.body, { where: { id: req.params.id } })
    .then(() => {
        res.send({ message: "Student updated successfully", data: req.body });
    })
    .catch((error) => {
        res.send({ message: "Error updating student", error });
    });
};

exports.delete = (req, res) => {
    student.destroy({ where: { id: req.params.id } })
    .then(() => {
        res.send({ message: "Student deleted successfully" });
    })
    .catch((error) => {
        res.send({ message: "Error deleting student", error });
    });
};
