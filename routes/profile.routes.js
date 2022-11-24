const express = require('express');
const router = express.Router();

router.get("/profile", (req, res, next) => {
  res.render("profile", { user : req.session.currentUser });
});

module.exports = router;



