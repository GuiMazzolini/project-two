const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/isLoggedIn');
const { isLoggedOut } = require('../middleware/isLoggedOut');


/* GET home page */
router.get("/", (req, res, next) => {
  console.log("user: ", req.session.currentUser)
  const user = req.session.currentUser
  res.render("index", { user });
});





module.exports = router;
