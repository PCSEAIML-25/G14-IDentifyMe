const connectMongo = require('./db');

connectMongo();
var cors=require("cors")
const express= require('express');
const app = express();
const port= 3001;

app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/auth'));

app.listen(port,()=>{
    console.log(`app is listening on the ${port}`);
}) 