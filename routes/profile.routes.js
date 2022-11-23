const express = require('express');
const router = express.Router();

router.get("/profile", (req, res, next) => {
    const user = req.session.currentUser
  res.render("profile", { user });
});

module.exports = router;



