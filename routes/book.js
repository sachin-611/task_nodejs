const express=require('express')
const { Book } = require('../models/admin')
const router=express.Router()
const {addBook,getBook,deleteBook,updateBook, getAllBook}=require('../utils/books')

const adminCheck=(req,res,next)=>{
    //authlogic
    next()
}

router.get('/name/:bookname',adminCheck,async (req,res)=>{
    let ress=await getBook(req.params.bookname)
    if(ress.status=="found")
        res.json(ress)
    else
        res.send(ress)
})

router.post('/create',adminCheck,async (req,res)=>{
    let datas=({
        name:req.body.name,
        image:req.body.image_url,
        author:req.body.author,
        pages:req.body.pages,
        price:req.body.prices  
    })
    let ress=await addBook(datas)
    res.send(ress)
})

router.delete('/delete',adminCheck,async (req,res)=>{
    let datas=({
        name:req.body.name,
        image:req.body.image_url,
        author:req.body.author,
        pages:req.body.pages,
        price:req.body.prices  
    })
    let cnt = await deleteBook(datas);
    res.send("deleted if existed")
})

router.put('/update',adminCheck,async (req,res)=>{
    let datas={
        name:req.body.name,
        image:req.body.image_url,
        author:req.body.author,
        pages:req.body.pages,
        price:req.body.prices 
    }
    let udata={
        name:req.body.uname,
        image:req.body.uimage_url,
        author:req.body.uauthor,
        pages:req.body.upages,
        price:req.body.uprices 
    }
    let resp=await updateBook(datas,udata);
    res.send(resp)
})

router.get('/all',adminCheck,async (req,res)=>{
    let data=await getAllBook();
    res.send(data)
})

router.get('*',async(req,res)=>{
    res.send("404 not found");
})

module.exports=router