const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema= new Schema({
    a_name:{
        type:String
    },
    a_type:{
        type:String
    },
    a_email:{
        type:String
    },
    a_pass:{
        type:String
    }
})

const Admin=mongoose.model("admin",adminSchema);
module.exports = Admin;