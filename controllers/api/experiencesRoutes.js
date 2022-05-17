const router = require("express").Router();
const { Experience } = require("../../models");






router.post("/", async (req, res) => {
  try {
    const experience = await Experience.create({
      ...req.body,
    });
    const experiencePK = experience.get({ plan: true });
    res.status(200).json({ pk: experiencePK, message: `New Experience created!` });
  } catch (err) {
    res.status(400).json(err);
  }
});




router.put("/:id", async (req, res) => {
  try {
    const updated = await Experience.update(
      {...req.body,},
      {where: { id: req.params.id },}
    );
    res.status(200).json({ experience: updated, message: "experience updated" });
  } catch (err) {
    res.status(400).json(err);
  }
});




router.get("/", async (req, res) => {
  try {
    const getExperience = await Experience.findAll({});
    res.json(getExperience);
  } catch (err) {
    res.status(500).json(err);
  }
});




router.get("/:id", async (req, res) => {
  try {
    const getexperience = await Experience.findByPk(req.params.id, {});
    if (!getexperience) {
      res.status(404).json({ message: "Not found with that id!" });
      return;
    }
    res.status(200).json(getexperience);
  } catch (err) {
    res.status(500).json(err);
  }
});






module.exports = router;
