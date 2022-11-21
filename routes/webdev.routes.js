const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("web-dev");
});

module.exports = router;
