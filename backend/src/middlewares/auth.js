require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async(req,res,next)=>{
  // read the token from the req cookies
  try{
    const token = req.cookies.token;
    if(!token){
      throw new Error("No Token Provided");
    }
    const decodedObj = jwt.verify(token, process.env.JWT_SECRET);
    const {_id} = decodedObj;
    const user = await User.findById(_id);
    if(!user){
      throw new Error("User not found");
    }
    req.user= user;
    next();
  } catch(err){
    res.status(400).send("Error : "+ err.message);
  }
};

module.exports ={
  userAuth,
}