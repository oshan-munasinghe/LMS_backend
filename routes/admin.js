const router = require("express").Router();
let Teacher = require("../models/admin");
const app = require("express");
const jwt = require ("jsonwebtoken");
const Admin = require("../models/admin");

router.route("/add").post((req,res)=>{
    const  a_name=req.body.a_name;
    const a_type=req.body.a_type;
    const a_email=req.body.a_email;
    const a_pass=req.body.a_pass;

    const newAdmin=new Admin({
        a_name,a_type,a_email, a_pass
    })

    newAdmin.save().then(()=>{
        res.json("Addes Admin")
    }).catch((err)=>{
        console.log(err);
    })
})

//====admin get
router.route("/").get((req,res)=>{
    Admin.find().then((admin)=>{
        res.json(admin)
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports=router;