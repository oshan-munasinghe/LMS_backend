const router = require("express").Router();
let Exclasses = require("../models/exclasses");
const app = require("express");


//====get classes
router.route("/").get((req,res)=>{
    Exclasses.find().then((exclasses)=>{
            res.json(exclasses)
            
    }).catch((err)=>{
        console.log(err);
    })
})
router.route("/add").post((req,res)=>{
    const  s_name=req.body.s_name;
    const s_regno=req.body.s_regno;
    const class_code=req.body.class_code;
    const class_name=req.body.class_name;
    const t_name =req.body.t_name;
    const payment =req.body.payment;
    const join=req.body.join;
   

    const neweClasses=new Exclasses({
        s_name,s_regno,class_code,class_name,t_name,payment,join
    })

    neweClasses.save().then(()=>{
        res.json("Addeded Class")
    }).catch((err)=>{
        console.log(err);
    })
})
//update
router.route("/update/:id").put(async(req,res)=>{
    let  userId=req.params.id;
    const{s_name,s_regno,class_code,class_name,t_name,payment,join}=req.body;

    const  updateExclass={s_name,s_regno,class_code,class_name,t_name,payment,join}
       
    const update=await  Exclasses.findByIdAndUpdate(userId,updateExclass)
    .then(()=>{
        res.status(200).send({status:"Stream Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error updating Data"});
    })
})
//delete
router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;
    await Exclasses.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"ecClass Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message })
    })

})
//# get one exclasses #
router.route("/get/:id").get(async(req,res)=>{
    let userId =req.params.id;
    const user=await Exclasses.findById(userId)
    .then((exclasses)=>{
        res.json(exclasses)
    }).catch((err)=>{
        console.log(err.message);
    })
})
module.exports=router;