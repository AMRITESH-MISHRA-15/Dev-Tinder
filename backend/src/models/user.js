const mongoose = require("mongoose");
const validator= require("validator");
const jwt= require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim:true,
    minlength:2,
    maxlength:50,
  },
  lastName: {
    type: String,
    trim:true,
    minlength:2,
    maxlength:50,
  },
  emailId: {
    type: String,
    required: true,
    unique : true,
    lowercase: true,
    trim: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Invalid Email Address");
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength:8,
    maxlength:100,
    validate(value){
      if(!validator.isStrongPassword(value)){
        throw new Error("Your Password is not strong enough, Enter a new password");
      }
    }
  },
  age: {
    type: Number,
    min: 18,
    max:120,
  },
  gender: {
    type: String,
    lowercase: true,
    enum:{
      values:["male","female","others"],
      message: `{VALUE} is not a valid gender type`,
    }
    // validate(value){
    //   if(!["male","female","others"].includes(value)){
    //     throw new Error("Gender data is not valid");
    //   }
    // }
  },
  photoUrl :{
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s",
    validate(value){
      if(!validator.isURL(value)){
        throw new Error("Invalid Photo URL");
      }
    }

  },
  about:{
    type: String,
    maxlength:300,
    default: "This is a default about of the user",
  },
  skills:{
    type: [String]
  }
},
{
  timestamps: true,
});

userSchema.methods.getJWT = async function(){
  const user = this;
  
  const token = await jwt.sign({_id:user._id},"devTinder@123",{
    expiresIn: "7d",
  });

  return token;
}

userSchema.methods.validatePassword = async function(passwordInputByUser){
  const user = this;
  const passwordHash = user.password;

  const isPasswordValid = await bcrypt.compare(passwordInputByUser,passwordHash);
  return isPasswordValid;
}

module.exports = mongoose.model("User", userSchema);