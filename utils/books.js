const {Book}=require('../models/admin')

async function addBook(book_detail){
    let res="";
    await Book.find(book_detail)
    .then(async (data)=>{
        if(data.length>0)
        {
            res="already exist"
            return res;
        }
    })
    if(res!=="")
        return res;
    await new Book(book_detail).save()
    .then(()=>{
        res="saved"
        return res;
    })
    if(res!=="")
        return res
    return "error saving"
}

async function getBook(book_name){
    let datas
    await Book.find({name:book_name}).then(async (data)=>{
        return datas={data:data,status:(data.length>0?"found":"not found")}
    })
    return datas
}

async function deleteBook(book_detail){
    let cnt=await (await Book.deleteMany(book_detail)).deletedCount;
    return "deleted books "+cnt
}

async function updateBook(book_detail,updated_book_detail){
    let cnt=await deleteBook(book_detail)
    if(cnt!==0)
        cnt=await addBook(updated_book_detail)
    else 
        cnt="no book found"
    return cnt
}

async function getAllBook()
{
    return await Book.find().then(async (data)=>{
        return data;
    }).catch((err)=>{
        return "error occured while fetching all books"
    })
}

module.exports={
    addBook,
    getBook,
    deleteBook,
    updateBook,
    getAllBook
}