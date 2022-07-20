const router = require("express").Router();
let Teacher = require("../models/teacher");
const app = require("express");
const jwt = require ("jsonwebtoken");

router.route("/add").post((req,res)=>{
    const t_no=req.body.t_no;
    const t_name=req.body.t_name;
    const subject=req.body.subject;
    const t_email=req.body.t_email;
    const t_phone=req.body.t_phone;
    const t_experiance=req.body.t_experiance;
    const t_qulaification=req.body.t_qulaification;
    const t_pass=req.body.t_pass;

    const newTeacher=new Teacher({
        t_no,t_name,subject, t_email,t_phone,t_experiance,t_qulaification,t_pass
    })

    newTeacher.save().then(()=>{
        res.json("Added Teacher")
    }).catch((err)=>{
        console.log(err);
    })
})
//====add teacher====
router.route("/").get((req,res)=>{
    Teacher.find().then((teacher)=>{
            res.json(teacher)
            
    }).catch((err)=>{
        console.log(err);
    })
})
// =====update teacher=======
router.route("/update/:id").put(async(req,res)=>{
    let TID=req.params.id;
    const{t_no,t_name,subject, t_email,t_phone,t_qulaification,t_experiance,t_pass}=req.body;

    const updateTeacher={
        t_no,t_name,subject, t_email,t_qulaification,t_experiance,t_phone,t_pass
    }
    const update=await Teacher.findByIdAndUpdate(TID,updateTeacher)
    .then(()=>{
        res.status(200).send({status:"user Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error updating Data"});
    })
})
// ==========delete Teacher========
router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;
    await Teacher.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"user Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message })
    })
})
//==========get one teacher=========
router.route("/get/:id").get(async(req,res)=>{
    let userId =req.params.id;
    const user=await Teacher.findById(userId)
    .then((teacher)=>{
        res.json(teacher)
    }).catch((err)=>{
        console.log(err.message);
    })
})


module.exports=router;