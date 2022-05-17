const router = require("express").Router();
const projectRoutes = require("./projectsRoutes");
const interestsRoutes = require("./interestsRoutes");
const experiencesRoutes = require("./experiencesRoutes");

router.use("/projects", projectRoutes);
router.use("/interests", interestsRoutes);
router.use("/experiences", experiencesRoutes);

module.exports = router;
