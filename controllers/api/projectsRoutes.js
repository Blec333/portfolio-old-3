const router = require("express").Router();
const { Projects } = require("../../models");






router.post("/", async (req, res) => {
  try {
    const project = await Projects.create({
      ...req.body,
    });
    const projectPK = project.get({ plan: true });
    res.status(200).json({ pk: projectPK, message: `New Projects created!` });
  } catch (err) {
    res.status(400).json(err);
  }
});




router.put("/:id", async (req, res) => {
  try {
    const updated = await Projects.update(
      {...req.body,},
      {where: { id: req.params.id },}
    );
    res.status(200).json({ project: updated, message: "project updated" });
  } catch (err) {
    res.status(400).json(err);
  }
});




router.get("/", async (req, res) => {
  try {
    const getProjects = await Projects.findAll({});
    res.json(getProjects);
  } catch (err) {
    res.status(500).json(err);
  }
});





router.get("/:id", async (req, res) => {
  try {
    const getProject = await Projects.findByPk(req.params.id, {});
    if (!getProject) {
      res.status(404).json({ message: "Not found with that id!" });
      return;
    }
    res.status(200).json(getProject);
  } catch (err) {
    res.status(500).json(err);
  }
});








module.exports = router;
