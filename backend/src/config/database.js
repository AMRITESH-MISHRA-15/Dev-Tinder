const mongoose = require("mongoose");

const connectDB = async()=>{
  await mongoose.connect(
    "mongodb+srv://amriteshmishra:FZPPRMSgzUSK1YCK@devtindercluster.qtw4k70.mongodb.net/devTinder"
  );
};

module.exports= {connectDB};