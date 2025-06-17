const mongoose = require("mongoose");

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
  },
  password: {
    type: String,
    required: true,
    minlength:8,
    maxlength:100,
  },
  age: {
    type: Number,
    min: 18,
    max:120,
  },
  gender: {
    type: String,
    lowercase: true,
    validate(value){
      if(!["male","female","others"].includes(value)){
        throw new Error("Gender data is not valid");
      }
    }
  },
  photoUrl :{
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s",
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

const User = mongoose.model("User", userSchema);

module.exports = User;