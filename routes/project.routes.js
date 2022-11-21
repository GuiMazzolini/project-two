const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("add-project");
});

module.exports = router;
