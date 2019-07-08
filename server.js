const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');
const app = express();
require('dotenv').config();

//Mongoose
try{
    mongoose.connect(process.env.MONGO_URL,{useNewUrlParser : true});
    //mongoose.connect('mongodb://192.168.106.142:27017/survey',{useNewUrlParser : true});
    //mongoose.connect('mongodb+srv://admin:<password>@cluster0-ytnpg.mongodb.net/test?retryWrites=true&w=majority')
    console.log('mongoDB connection was succesfully stablished');
}catch(err){
    console.log(`MongoDB connection error - ${err}`);
}

//Use
app.use(cors());
app.use(express.json());

//Models
requireDir('./src/models');

//Routes
app.use('/api',require('./src/routes'));

app.listen(process.env.PORT || 3232);
console.log('app is listen on 3232 port.')