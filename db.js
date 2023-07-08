const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
const mongoURI= 'mongodb://127.0.0.1:27017/blockchain';
const connectMongo=()=>{
    mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
        console.log('connected to mongo');
    })
}

module.exports=connectMongo;