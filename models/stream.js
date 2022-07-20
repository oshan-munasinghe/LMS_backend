const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const streamSchema= new Schema({
        t_name:{
            type:String
        },
        clz_code:{
            type:String
        },
        clz_name:{
            type:String
        },
        clz_link:{
            type:String
        },
        noteLink1:{
            type:String
        },
        n1dis:{
            type:String
        },
        noteLink2:{
            type:String
        },
        n2dis:{
            type:String
        },
        noteLink3:{
            type:String
        },
        n3dis:{
            type:String
        },
        noteLink4:{
            type:String
        },
        n4dis:{
            type:String
        },
        noteLink5:{
            type:String
        },
        n5dis:{
            type:String
        },
        noteLinkall:{
            type:String
        },
        nalldis:{
            type:String
        },


})
const Stream=mongoose.model("stream",streamSchema)
module.exports=Stream