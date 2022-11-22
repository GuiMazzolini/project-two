const express = require('express');
const router = express.Router();
const Project = require("../models/Project.model")


router.get("/", (req, res, next) => {
  res.render("/");
});

router.get("/project/create", (req, res, next) => {
  res.render("add-project");
});

router.post("/project/create", (req, res, next) => {
  // console.log(req.body);
  const { name, url_website, description, url_github, image, course } = req.body;

  Project.create({ name, url_website, description, url_github, image, course })
    .then(() => res.redirect("/"))
    .catch((error) => next(error));
});


module.exports = router;
