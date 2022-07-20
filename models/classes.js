const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classesSchema= new Schema({
    classCode:{
        type:String,
    },
    className:{
        type:String,
    },
    subject:{
        type:String,
    },
    grade:{
        type:Number,
    },
    t_name:{
        type:String,
    },
    day:{
        type:String,
    },
    startTime:{
        type:String,
    },
    endTime:{
        type:String,
    },
    fee:{
        type:String,
    },
    discription:{
        type:String,
    },
    status:{
        type:String,
    }

})
const Classes=mongoose.model("classes",classesSchema)
module.exports=Classes;