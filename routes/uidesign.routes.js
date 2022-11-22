const express = require('express');
const router = express.Router();

router.get("/uidesign", (req, res, next) => {
  const user = req.session.currentUser
  res.render("uidesign" , { user });
});

module.exports = router;
