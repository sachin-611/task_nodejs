  if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
  }
  const dbURL=process.env.DB_URL
  //conecting mongo database
  const mongoose = require("mongoose");
  mongoose
    .connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection stablished!");
    })
    .catch((err) => {
      console.log("oh no!!", err);
    });
  
  //creating book schema
  const bookSchema = new mongoose.Schema({
    name:String,
    image:String,
    author:String,
    pages:String,
    price:String  
  });
  const Book=mongoose.model('Book',bookSchema)
  // exporting the schema
  module.exports={Book}