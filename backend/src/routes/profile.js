const express = require("express");
const profileRouter = express.Router();
const {userAuth} = require("../middlewares/auth");
const {validateEditProfileData}= require("../utils/validation");
const bcrypt = require("bcrypt");
const User = require("../models/user");


profileRouter.get("/profile/view", userAuth ,async(req,res)=>{
  try{
    const user = req.user;

    const safeUserData = {
      firstName: user.firstName,
      lastName: user.lastName,
      photoUrl: user.photoUrl,
      age: user.age,
      gender: user.gender,
      about: user.about,
      skills: user.skills,
    };

    res.json(safeUserData);
  } catch(err){
    res.status(400).send("ERROR : "+ err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async(req,res)=>{
  try{
    if(!validateEditProfileData(req)){
      throw new Error("Invalid Edit Request");
    }

    const loggedInUser = req.user;
    Object.keys(req.body).forEach((key)=>(loggedInUser[key]= req.body[key]));

    await loggedInUser.save();

    res.json({
      message:`${loggedInUser.firstName}, your profile updated successfully`,
      data: loggedInUser,
    });
  } catch(err){
    res.status(400).send("ERROR : "+err.message);
  }
});

profileRouter.patch("/profile/password",userAuth, async(req,res)=>{
  try{

    const {password, newPassword} = req.body;
    if(!password || !newPassword){
      throw new Error("Both old and new passwords are required.");
    }

    const loggedInUser = req.user;

    const isMatch = await bcrypt.compare(password,loggedInUser.password);

    if(!isMatch){
      throw new Error("Old Password is incorrect.");
    }

    const passwordHash = await bcrypt.hash(newPassword,10);
    loggedInUser.password= passwordHash;
    await loggedInUser.save();
    res.json({
      message :`${loggedInUser.firstName}, your  password has been changed successfully`,
    });

  } catch(err){
    res.status(400).send("ERROR : "+err.message);
  }
});

profileRouter.post("/profile/forgot-password",async(req,res)=>{
  try{

    const {emailId,newPassword} = req.body;
    if(!emailId || !newPassword){
      throw new Error("Email and New password both are required");
    }
    
    const user = await User.findOne({emailId});
    if(!user){
      throw new Error("No user found with the provided email id");
    }

    const passwordHash = await bcrypt.hash(newPassword,10);

    user.password = passwordHash;
    await user.save();
    
    res.json({
      message: `Password has been reset successfully for ${user.firstName}.`
    });

  } catch(err){
    res.status(400).send("ERROR : "+err.message);
  }
})

module.exports = profileRouter;
