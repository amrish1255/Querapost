const { log } = require("console");
const express = require("express");
const methodoverride = require("method-override");
// const { request } = require("http");
const bp = require("body-parser");
const app = express();
const port = 8080;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// path setup
const path = require("path");
// views engine setup
app.set("views engine", "ejs");

// directory add setup
app.set("views", path.join(__dirname, "views")); // views dir add

app.use(express.static(path.join(__dirname, "public"))); // public dir add

let posts = [
  {
    username: "hiteshChoudhary",
    content: "i love code",
  },
  {
    username: "Akash",
    content: "i love plays",
  },
  {
    username: "Himanshu",
    content: "i love talk",
  },
];

//api setup
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("form.ejs");
});

app.post("/posts", (req, res) => {
  console.log(req.body);
  let { username, content } = req.body;
  posts.push({ username, content });
  res.redirect("/posts");
});

// server setup
app.listen(port, (req, res) => {
  console.log("server is in running position");
});
