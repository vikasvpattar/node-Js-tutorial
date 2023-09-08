const express = require("express");
const app = express();

// --Get  API using Express
app.get("/", (req, res) => {
  res.send("This is the route  is created by using Express");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.listen(8000, () => {
  console.log("server started");
});
