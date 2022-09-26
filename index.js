const express=require('express')
const app=express()
const bookRouter=require('./routes/book')
require('dotenv').config();
const {Book,Admin}=require('./models/admin.js')
app.use(express.urlencoded({extended:true}));
app.use('/book',bookRouter);

app.listen(process.env.PORT,()=>{
    console.log(`server running on port:${process.env.PORT}`)
})