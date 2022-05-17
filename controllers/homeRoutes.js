const router = require("express").Router();
const { Experiences, Interests, Projects } = require("../models");





router.get("/", async (req, res) => {
  res.render("portfolio");
});


router.get("/projects", async (req, res) => {
  try {
    const projects = (await Projects.findAll()).map((type) =>
      type.get({ plain: true })
    );
    res.render("projects", { projects });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});


router.get("/experiences", async (req, res) => {
  try {
    const projects = (await Experiences.findAll()).map((type) =>
      type.get({ plain: true })
    );
    res.render("experiences", { experiences });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});


router.get("/interests", async (req, res) => {
  try {
    const projects = (await Interests.findAll()).map((type) =>
      type.get({ plain: true })
    );
    res.render("interests", { interests });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});







// router.get("/experiences", async (req, res) => {
//   res.render("experiences");
// });

// router.get("/interests", async (req, res) => {
//   res.render("interests");
// });

// router.get("/projects", async (req, res) => {
//   res.render("projects");
// });







module.exports = router;
