const express = require("express");
const app = express();
const path = require("path");
// finding path of file
// const pathDir = path.join(__dirname, "public");
// console.log(pathDir);

// app.use(express.static(pathDir));
// // sending HTML file
// app.get("/home", (req, res) => {
//   res.sendFile(`${pathDir}/home.html`);
// });

// Template Engine
app.set("view engine", "ejs");
console.log(app.get("view engine"));
// Rendering HTML file using ejs
app.get("/", (req, res) => {
  res.render("index", {
    title: "index page",
  });
});
app.get("/home", (req, res) => {
  res.render("home", {
    title: "Home Page",
  });
});

// --Get  API using Express
app.get("/", (req, res) => {
  res.send("This is the route  is created by using Express");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

// sending JSON file
app.get("/json", (req, res) => {
  res.send({
    nme: "vikas",
    age: 23,
    email: "vikasvpattar18@gmail.com",
  });
});

// file downloading
app.get("/download", (req, res) => {
  res.download(`${pathDir}/index.html`);
});

app.listen(8000, () => {
  console.log("server started");
});
