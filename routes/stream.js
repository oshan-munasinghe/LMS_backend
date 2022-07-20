const router = require("express").Router();
let Stream = require("../models/stream");
const app = require("express");
const jwt = require ("jsonwebtoken");

router.route("/").get((req,res)=>{
    Stream.find().then((stream)=>{
            res.json(stream)
            
    }).catch((err)=>{
        console.log(err);
    })
})
//add stream
router.route("/add").post((req,res)=>{
    const t_name=req.body.t_name;
    const clz_code =req.body.clz_code;
    const clz_name =req.body.clz_name;
    const clz_link=req.body.clz_link;
    const noteLink1=req.body.noteLink1;
    const n1dis=req.body.n1dis;
    const noteLink2=req.body.noteLink2;
    const n2dis=req.body.n2dis;
    const noteLink3=req.body.noteLink3;
    const n3dis=req.body.n3dis;
    const noteLink4=req.body.noteLink4;
    const n4dis=req.body.n4dis;
    const noteLink5=req.body.noteLink5;
    const n5dis=req.body.n5dis;
    const noteLinkall=req.body.noteLinkall;
    const nalldis=req.body.nalldis;

    const newStream=new Stream({
        t_name,clz_code,clz_name,clz_link,noteLink1,noteLink2,noteLink3,noteLink4,noteLink5,noteLinkall,
        n1dis,n2dis,n3dis,n4dis,n5dis,nalldis
    })

    newStream.save().then(()=>{
        res.json("Added Stream")
    }).catch((err)=>{
        console.log(err);
    })
})

//delete
router.route("/delete/:id").delete(async(req,res)=>{
    let strId=req.params.id;
    await Stream.findByIdAndDelete(strId).then(()=>{
        res.status(200).send({status:"Stream Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message })
    })
})
//update
router.route("/update/:id").put(async(req,res)=>{
    let strID=req.params.id;
    const{t_name,clz_code,clz_name,clz_link,noteLink1,noteLink2,noteLink3,noteLink4,noteLink5,noteLinkall,
        n1dis,n2dis,n3dis,n4dis,n5dis,nalldis}=req.body;

    const updateStream={
        t_name,clz_code,clz_name,clz_link,noteLink1,noteLink2,noteLink3,noteLink4,noteLink5,noteLinkall,
        n1dis,n2dis,n3dis,n4dis,n5dis,nalldis
    }
    const update=await Stream.findByIdAndUpdate(strID,updateStream)
    .then(()=>{
        res.status(200).send({status:"Stream Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error updating Data"});
    })
})
//get one stream
router.route("/get/:id").get(async(req,res)=>{
    let userId =req.params.id;
    const user=await Stream.findById(userId)
    .then((stream)=>{
        res.json(stream)
    }).catch((err)=>{
        console.log(err.message);
    }) 
})
module.exports=router;
