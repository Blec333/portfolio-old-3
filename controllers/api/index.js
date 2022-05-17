const router = require("express").Router();
const projectRoutes = require("./projectsRoutes");
const interestsRoutes = require("./interestsRoutes");
const experienceRoutes = require("./experienceRoutes");

router.use("/projects", projectRoutes);
router.use("/interests", interestsRoutes);
router.use("/experience", experienceRoutes);

module.exports = router;
