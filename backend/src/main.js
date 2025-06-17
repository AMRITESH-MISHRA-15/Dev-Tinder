const express = require("express");
const {connectDB} = require("./config/database");
const app= express();
const PORT= 3000;
const User = require("./models/user");

app.use(express.json());

app.post("/signup",async(req,res)=>{
  console.log(req.body);
  const userObj =req.body;

  const user = new User(userObj);
  try{
    await user.save();
    res.send("User Added Successfully...");
  } catch(err){
    res.status(400).send("Error saving the user: "+ err.message);
  }
});

app.get("/user",async(req,res)=>{
  const userEmail = req.body.emailId;
  try{
    const user = await User.find({emailId:userEmail});
    if(user.length===0){
      res.status(404).send("User not found");
    }
    else{
      res.send(user);
    }
  } catch{
    res.status(404).send("Something went wrong");
  }
});

app.delete("/user", async(req,res)=>{
  const userId = req.body.userId;
  try{
    await User.findByIdAndDelete(userId);
    res.send("User deleted successfully.");
  } catch(err){
    res.status(404).send("Something went wrong");
  }
});

app.patch("/user",async(req,res)=>{
  const userId = req.body.userId;
  const data=req.body;
  try{
    const user= await User.findByIdAndUpdate(userId,data,{
      returnDocument: "after",
      runValidators: true,
    });
    console.log(user);
    res.send("User data updated successfully");
  } catch(err){
    res.status(400).send(err.message);
  }
})

// Feed API - GET/feed - gets all the users from the database
app.get("/feed",async (req,res)=>{
  try{
    const users=await User.find({});
    res.send(users);
  } catch(err){
    res.status(404).send("Something went wrong");
  }
});

app.use("/",(req,res)=>{
  res.send("Hello world from the server...");
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
    console.error("❌ MongoDB connection failed:");
    console.error("Error Name:", err.name);
    console.error("Error Message:", err.message);
    console.error("Full Error:", err);
  });

