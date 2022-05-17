const router = require("express").Router();
const { Interests } = require("../../models");







router.post("/", async (req, res) => {
  try {
    const interest = await Interests.create({
      ...req.body,
    });
    const interestPK = interest.get({ plan: true });
    res.status(200).json({ pk: interestPK, message: `New Interests created!` });
  } catch (err) {
    res.status(400).json(err);
  }
});



router.put("/:id", async (req, res) => {
  try {
    const updated = await Interests.update(
      {...req.body,},
      {where: { id: req.params.id },}
    );
    res.status(200).json({ interest: updated, message: "interest updated" });
  } catch (err) {
    res.status(400).json(err);
  }
});



router.get("/", async (req, res) => {
  try {
    const getInterests = await Interests.findAll({});
    res.json(getInterests);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/:id", async (req, res) => {
  try {
    const getinterest = await Interests.findByPk(req.params.id, {});
    if (!getinterest) {
      res.status(404).json({ message: "Not found with that id!" });
      return;
    }
    res.status(200).json(getinterest);
  } catch (err) {
    res.status(500).json(err);
  }
});












module.exports = router;
