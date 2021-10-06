const router = require("express").Router();
const User = require("../models/User"); // import model
//const bcrypt = require("bcrypt"); // password hash

//Register
router.post("/register", async (req, res) => {
  try {
    const user = await new User({
      username: "Yuki",
      email: "yuki@gmail.com",
      password: "123456"
    });

    await user.save(); //write on mongoDB
    res.send("Saved in DB");

  } catch (error) {
    console.error(`${error} : Failed to save in DB`);
  }

});

module.exports = router;