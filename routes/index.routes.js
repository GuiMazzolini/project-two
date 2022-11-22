const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/isLoggedIn');
const { isLoggedOut } = require('../middleware/isLoggedOut');


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});





module.exports = router;
