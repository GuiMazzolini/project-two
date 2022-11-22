const express = require('express');
const router = express.Router();

router.get("/webdev", (req, res, next) => {
  const user = req.session.currentUser
  res.render("web-dev" , { user });
});

module.exports = router;
