
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT =process.env.PORT || 9000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
  
    useNewUrlParser: true, 
    
    useUnifiedTopology: true 
});

const con = mongoose.connection;
con.once("open",()=>{ 
    console.log("🪲  mongo db connection sucess!");
})

const studentRouter = require("./routes/students.js");
app.use("/student",studentRouter);

const teacherRouter = require("./routes/teacher.js");
app.use("/teacher",teacherRouter);

const classesRouter = require("./routes/classes.js");
app.use("/classes",classesRouter);

const adminRouter = require("./routes/admin.js");
app.use("/admin",adminRouter);

const exclassesRouter=require("./routes/exclasses.js");
app.use("/exclasses",exclassesRouter)

const streamRouter=require("./routes/stream.js");
app.use("/stream",streamRouter);
app.listen(PORT,()=>{
    console.log(`🚀 Server is up and running on port no ${PORT}`);
})