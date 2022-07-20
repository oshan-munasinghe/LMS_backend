const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exclassesSchema= new Schema({
    s_name:{
        type:String
    },
    s_regno:{
        type:String
    },
    class_code:{
        type:String
    },
    class_name:{
        type:String
    },
    t_name:{
        type:String
    },
    payment:{
        type:Boolean
    },
    join:{
        type:Boolean
    }
})

const Exclasses=mongoose.model("exclasses",exclassesSchema)
module.exports=Exclasses