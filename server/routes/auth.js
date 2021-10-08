const router = require("express").Router();
const User = require("../models/User"); // import model
//const bcrypt = require("bcrypt"); // password hash

//Register
router.post("/register", async (req, res) => {
  console.log(req.body)
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  //const user = new User(req.body);
  try {
    await user.save(); //write on mongoDB
    res.status(200).json(user);
    console.log("OK");
  } catch (error) {
    res.status(400).send(error);
    console.error(`${error} : Failed to save in DB`);
  }
});

module.exports = router;
