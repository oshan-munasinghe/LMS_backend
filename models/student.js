const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema= new Schema({
    regNo:{
        type : String,
    },
    name : {
        type : String,
        required: true
    },
    age:{
        type: Number
    },
    gender:{
        type:String 
    },
    grade:{
        type:String
    },
    school:{
        type:String
    },
    phoneno:{
        type:String
    },
    uemail:{
        type:String
    },
    password:{
        type:String
    }
    
})

const Student = mongoose.model("student",studentSchema);

module.exports = Student;