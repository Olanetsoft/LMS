require("dotenv").config();
const path = require("path");
const db = require("./config/database");
const express = require("express");

const app = express();

//set this value globally in our application
app.set("view engine", "ejs");
app.set("views", "views");

//use bodyParser to grab the body sent via nodejs
app.use(express.urlencoded({ extended: false }));

//This is use to statically generate files in the public and images folder using the path declared
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Home | LMS",
  });
});

module.exports = app;
