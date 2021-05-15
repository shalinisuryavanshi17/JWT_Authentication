const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const sampleRoutes = require("./routes/sampleRoutes");
const app = express();
const cookieParser = require("cookie-parser");
// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
// view engine
app.set("view engine", "ejs");

// database connection
const dbURI =
  "mongodb+srv://admin-shalini:shalini123@cluster0.khusc.mongodb.net/node-auth";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(3000, () => {
      console.log("listening to 3000");
    })
  )
  .catch((err) => console.log("failed"));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
app.use(authRoutes);
app.use(sampleRoutes);

// app.get("/set-cookies", (req, res) => {
//   //res.setHeader("Set-Cookie", "hello=true");
//    res.cookie('newUser','false',{httpOnly:true})//httponly is used to avoid fetchinhg user data on the client side
//   res.send("you got the cookie!!!!!!!!!");
// });

