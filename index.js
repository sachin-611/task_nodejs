const express=require('express')
const app=express()
const cookieParser = require('cookie-parser');
const bookRouter=require('./routes/book')
require('dotenv').config();
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use('/book',bookRouter);

app.listen(process.env.PORT,()=>{
    console.log(`server running on port:${process.env.PORT}`)
})