const express = require('express')
const app = express();
const PORT =process.env.PORT || 8080;

require('dotenv').config();
const mongoose = require('mongoose')
const Mongo_URI = process.env.MONGO_URI;
mongoose.connect(Mongo_URI)
.then((data)=>{
    app.listen(PORT,()=>{
        console.log(`connected to database`);
    });
})

app.get('/',(req,res)=>{
    res.status(200).send({msg:"connected to database"})
})