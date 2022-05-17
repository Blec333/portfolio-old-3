const seedExperiences = require("./experiences-seeds");
const seedInterestes = require("./interests-seeds");
const seedProjects = require("./projects-seeds");
const seedEducation = require("./education-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- db SYNCED -----\n");

  await seedExperiences();
  console.log("\n----- experiences SEEDED -----\n");

  await seedInterestes();
  console.log("\n----- interests SEEDED -----\n");

  await seedProjects();
  console.log("\n----- projects SEEDED -----\n");

  await seedEducation();
  console.log("\n----- projects SEEDED -----\n");

  process.exit(0);
};

seedAll();
