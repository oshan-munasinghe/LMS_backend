const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema= new Schema({
    t_name:{
        type:String
    },
    t_no:{
        type:String 
    },
    subject:{
        type:String 
    },
    t_email:{
        type:String 
    },
    t_qulaification:{
        type:String 
    },
    t_experiance:{
        type:String
    },
    t_phone:{
        type:String 
    },
    t_pass:{
        type:String 
    }
})
const Teacher = mongoose.model("teacher",teacherSchema);

module.exports = Teacher;