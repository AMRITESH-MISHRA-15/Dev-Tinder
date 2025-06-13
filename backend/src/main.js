const express = require("express");
const {connectDB} = require("./config/database");
const app= express();
const PORT= 3000;
const User = require("./models/user");

app.post("/signup",async(req,res)=>{
  const userObj ={
    firstName: "Amritesh",
    lastName: "Mishra",
    emailId: "amriteshmishra2004@gmail.com",
    password: "abcde@123"
  };

  const user = new User(userObj);
  try{
    await user.save();
    res.send("User Added Successfully...");
  } catch(err){
    res.status(400).send("Error saving the user: "+ err.message);
  }
});

connectDB()
  .then(()=>{
    console.log("Database connection established...");
    app.listen(PORT,()=>{
      console.log("Server is listening successfully on port 3000...");
    });
  })
  .catch((err)=>{
    console.error("Database cannot be connected !!");
  });

