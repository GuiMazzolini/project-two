const express = require('express');
const router = express.Router();
const Project = require("../models/Project.model")
const User = require("../models/User.model")

router.get("/webdev", (req, res, next) => {
  return Project.find({course: "Web Development"})
    .then((allTheWebDevFromDB) => {
      const user = req.session.currentUser
      res.render("web-dev", {project: allTheWebDevFromDB, user});
    })
    .catch((error) => {
      console.log("Error while getting the projects from the DB: ", error);
      next(error);
    });
});

router.get("/data", (req, res, next) => {
  console.log("USER: ", req.session.currentUser)
   return Project.find({course: "Data Analitcs"})
    .then((allTheDataFromDB) => {
      const user = req.session.currentUser
      res.render("data-analytics", {project: allTheDataFromDB, user});
    })
    .catch((error) => {
      console.log("Error while getting the projects from the DB: ", error);
      next(error);
    });
});

router.get("/uidesign", (req, res, next) => {
  return Project.find({course: "UX UI"})
   .then((allTheUxFromDB) => {
    const user = req.session.currentUser
     res.render("uidesign", {project: allTheUxFromDB, user});
   })
   .catch((error) => {
     console.log("Error while getting the projects from the DB: ", error);
     next(error);
   });

});

router.get("/profile", (req, res, next) => {
  const user = req.session.currentUser
  return Project.find({user: user._id})
   .then((allTheUsernameFromDB) => {
    res.render("profile", {project: allTheUsernameFromDB, user});
   })
   .catch((error) => {
     console.log("Error while getting the projects from the DB: ", error);
     next(error);
   });
});

router.get("/project/create", (req, res, next) => {
  const user = req.session.currentUser
  res.render("add-project" , { user });
});

router.get("/project/:projectId/delete", (req, res) => {
  console.log("delete", req.params.projectId)
  const id = req.params.projectId
  
  Project.findByIdAndRemove(id)
  .then(deletedProject => {
      res.redirect("/profile")
  })
  .catch(err => {
      console.log(err)
  })
})


router.get("/project/:projectId/edit", (req, res, next) => {
  const id = req.params.projectId;

  Project.findById(id)
    .then(data => {
      res.render("edit", data )
    })
    .catch((error) => {
      console.log("Error while retrieving book details: ", error);
      next(error);
    });
  })



router.post("/project/create", (req, res, next) => {
const { name, url_website, description, url_github, image, course} = req.body;
const user = req.session.currentUser
console.log(req.body)

  Project.create({ name, url_website, description, url_github, image, course , user})
    .then(() => res.redirect("/profile"))
    .catch((error) => next(error));
});

router.post("/project/:id/edit", (req, res, next) => {
  const id = req.params.id;
  const {  name, url_website, description, url_github, image, course, projects  } = req.body;
  const user = req.session.currentUser

  Project.findByIdAndUpdate( id ,
    {  name, url_website, description, url_github, image, course, projects  },
    { new: true })
    .then(updatedProject => res.redirect('/profile'))
    .catch((error) => next(error))
});

module.exports = router;