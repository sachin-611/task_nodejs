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
  //creating admin schema
  const adminSchema = new mongoose.Schema({
    users:[{username:String,password:String}]
  });
  const Admin=mongoose.model('Admin',adminSchema)
  
  //creating book schema
  const bookSchema = new mongoose.Schema({
    name:String,
    image:String,
    author:String,
    pages:String,
    price:String  
  });
  const Book=mongoose.model('Book',bookSchema)
  // exporting both of the schema
  module.exports={Book}