const express = require('express');
const router = express.Router();


router.get("/data", (req, res, next) => {
  console.log("USER: ", req.session.currentUser)
  const user = req.session.currentUser
  res.render("data-analytics", { user });
});

module.exports = router;
