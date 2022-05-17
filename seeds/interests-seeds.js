const { Interests } = require("../models");

const interestsData = [
  {
    name: "Spending time with my wife & boys!",
    type: "Family",
  },
  {
    name: "Building applications",
    type: "Learning",
  },
  {
    name: "Sheetmetal Craft",
    type: "Trade",
  },
  {
    name: "Biking",
    type: "Exercise",
  },
  {
    name: "Swimming - Pool (not ocean)",
    type: "Exercise",
  },
  {
    name: "Reading about emerging technologies",
    type: "Learning",
  },
  {
    name: "Pondering the mysteries of the universe",
    type: "Existentialism",
  },
  {
    name: "Wine & Craft Beer",
    type: "Indulgences",
  },
];



const seedInterests = () => Interests.bulkCreate(interestsData);



module.exports = seedInterests;
