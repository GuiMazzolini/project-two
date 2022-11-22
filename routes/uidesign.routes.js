const express = require('express');
const router = express.Router();

router.get("/uidesign", (req, res, next) => {
  res.render("uidesign");
});

module.exports = router;
