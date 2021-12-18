const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/gitbrowser?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('connection successfully')
    })
}

module.exports = connectToMongo;