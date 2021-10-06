const router = require("express").Router();

//set url
router.get("/", (req, res) => {
  res.send("This is user router");
});

module.exports = router;