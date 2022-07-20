const router = require("express").Router();
let Classes = require("../models/classes");
const app = require("express");
const jwt = require ("jsonwebtoken");


//======add classes=======
router.route("/add").post((req,res)=>{
    const classCode=req.body.classCode;
    const className=req.body.className;
    const subject=req.body.subject;
    const grade=req.body.grade;
    const t_name =req.body.t_name;
    const day =req.body.day;
    const startTime=req.body.startTime;
    const endTime=req.body.endTime;
    const fee=req.body.fee;
    const discription=req.body.discription;
    const status=req.body.status;

    const newClasses=new Classes({
        classCode,className,subject,grade,t_name,day,startTime,endTime,fee,discription,status
    })

    newClasses.save().then(()=>{
        res.json("Addeded Class")
    }).catch((err)=>{
        console.log(err);
    })
})


//====get classes
router.route("/").get((req,res)=>{
    Classes.find().then((classes)=>{
            res.json(classes)
            
    }).catch((err)=>{
        console.log(err);
    })
})
//==========update classes
router.route("/update/:id").put(async(req,res)=>{
    let CID=req.params.id;
    const{
        classCode,className,subject,grade, t_name,day,endTime,startTime,fee,discription,status
    }=req.body;

    const updateClasses={
        classCode,className,subject,grade, t_name,day,endTime,startTime,fee,discription,status
    }
    const update=await Classes.findByIdAndUpdate(CID,updateClasses).
    then(()=>{
        res.status(200).send({status:"Class updated 🕷️"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error Updating dAta 🤦‍♂️"})
    })
})
//==========delete Teacher
router.route("/delete/:id").delete(async(req,res)=>{
    let CID=req.params.id;
    await Classes.findByIdAndDelete(CID).then(()=>{
        res.status(200).send({status:"user Deleted 🙃"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete Classes 😒",error:err.message })
    })
})
//=======get one class

router.route("/get/:id").get(async(req,res)=>{
    let CID=req.params.id;
    const classes=await Classes.findById(CID).then((classes)=>{
        res.json(classes)
    }).catch((err)=>{
        console.log("error loading Data 🐸",err.message)
    })
})
module.exports=router;