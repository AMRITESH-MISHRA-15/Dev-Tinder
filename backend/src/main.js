const express = require("express");
const {connectDB} = require("./config/database");
const app= express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);

app.use("/",(req,res)=>{
  res.send("Hello world from the server...");
});

connectDB()
  .then(()=>{
    console.log("Database connection established...");
    app.listen(3000,()=>{
      console.log("Server is listening successfully on port 3000...");
    });
  })
  .catch((err)=>{
    console.error("❌ MongoDB connection failed:");
    console.error("Error Name:", err.name);
    console.error("Error Message:", err.message);
    console.error("Full Error:", err);
  });

