const ageDetector = (req, res, next) => {
  if (req.query.age > 18) {
    // res.send("you can access the website");
    next();
  } else {
    // res.send("you can not access the website");
  }
};

module.exports = ageDetector;
