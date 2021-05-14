const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const sampleRoutes=require('./routes/sampleRoutes')
const app = express();
const bodyParser=require('body-parser')
// middleware
app.use(express.static("public"));
app.use(express.json())
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
