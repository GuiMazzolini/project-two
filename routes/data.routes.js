const express = require('express');
const router = express.Router();

router.get("/data", (req, res, next) => {
  res.render("data-analytics");
});

module.exports = router;
