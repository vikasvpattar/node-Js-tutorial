const express = require("express");

const router = express.Router();

const middleware = require("./middleware");
// router.use(middleware);    this will apply throughout all the routes
router.get("/", middleware, (req, res) => {
  res.render("index", {
    title: "index page",
  });
});
router.get("/home", middleware, (req, res) => {
  res.render("home", {
    title: "Home Page",
  });
});

module.exports = router;
