const router = require("express").Router();
let Student = require("../models/student");
const app = require("express");
const jwt = require ("jsonwebtoken");

//-----------------add student to DB-----
router.route("/add").post((req,res)=>{
    const regNo=req.body.regNo;
    const name=req.body.name;
    const age=Number(req.body.age);
    const gender=req.body.gender;
    const grade=req.body.grade;
    const school=req.body.school;
    const phoneno=req.body.phoneno;
    const uemail=req.body.uemail;
    const password=req.body.password;

    const newStudent=new Student({
        regNo,
        name,
        age,
        gender,
        grade,
        school,
        phoneno,
        uemail,
        password
    })
    newStudent.save().then(()=>{
        res.json("Atudent Added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/login").post((req,res)=>{
    const uemail=req.body.uemail;
    const password=req.body.password;
    
    const newStudent=new Student({
      
        uemail,
        password
    })
   
    jwt.sign({user:newStudent},"s1234",(err,token)=>{
        if(err){
            res.json({error:err})
        }else{
            res.json({token:token})
        }
    })
   

function verifyToken(req,res,next){
    if (typeof(req.headers['authorization'])!='undefined' && req.headers['authorization']!='undefined'){
        var headerToken = req.headers['authorization'].split('')[1];
        if(headerToken!=='undefined'){
            req.token=headerToken;
            next();
        }
        else{
            res.json({msg:"Unauthorzed Request"})
        }
    }
    else{
        res.json({msg:"Unauthorized Request"})
    }
}

})
//------------Retrive data from Database------------------
router.route("/").get((req,res)=>{
    Student.find().then((student)=>{
            res.json(student)
            
    }).catch((err)=>{
        console.log(err);
    })
})
//------Update student-------
router.route("/update/:id").put(async(req,res)=>{
    let userId=req.params.id;
    const{regNo,name,age,gender,grade,school,phoneno,uemail,password}=req.body;

    const updateStudent={
        regNo,
        name,
        age,
        gender,
        grade,
        school,
        phoneno,
        uemail,
        password
    }
    const update = await Student.findByIdAndUpdate(userId,updateStudent).then(()=>{
        res.status(200).send({status:"user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error updating data"});
    })

})
// ---------Delete Student-----------------
router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;
    await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"user Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message })
    })
})
//-------------get one studnet--------------------
router.route("/get/:id").get(async(req,res)=>{
    let userId =req.params.id;
    const user=await Student.findById(userId)
    .then((student)=>{
        res.json(student)
    }).catch((err)=>{
        console.log(err.message);
    })
})


module.exports=router;