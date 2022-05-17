const { Projects } = require("../models");

const projectsData = [
  {
    name: "Ballpark Village",
    category: "Commercial",
    type: "Condominiums",
    industry: "Construction",
    size: "Highrise",
    oversightAgency: "City",
    estimatedValue: 1000000,
  },
  {
    name: "Lane Field South",
    category: "Commercial",
    type: "Hotel",
    industry: "Construction",
    size: "Highrise",
    oversightAgency: "City",
    estimatedValue: 1000000,
  },
  {
    name: "Casa De Las Campanas",
    category: "Commercial",
    type: "Skilled Nursing Facility",
    industry: "Construction",
    size: "Midrise",
    oversightAgency: "OSHPD",
    estimatedValue: 1000000,
  },
  {
    name: "Legacy International Center",
    category: "Commercial",
    type: "Office & Biolab",
    industry: "Construction",
    size: "Highrise",
    oversightAgency: "City",
    estimatedValue: 1000000,
  },
  {
    name: "Lilly Labs",
    category: "Commercial",
    type: "Office & Biolab",
    industry: "Construction",
    size: "Midrise",
    oversightAgency: "City",
    estimatedValue: 1000000,
  },
  {
    name: "Kaiser Riverside",
    category: "Commercial",
    type: "Hospital",
    industry: "Construction",
    size: "Highrise",
    oversightAgency: "OSHPD",
    estimatedValue: 1000000,
  },
  {
    name: "Scripps Cardiovascular Institute",
    category: "Commercial",
    type: "Hospital",
    industry: "Construction",
    size: "Midrise",
    oversightAgency: "OSHPD",
    estimatedValue: 1000000,
  },
  {
    name: "Sharp RB MOB",
    category: "Commercial",
    type: "Medical Office Building",
    industry: "Construction",
    size: "Midrise",
    oversightAgency: "City",
    estimatedValue: 1000000,
  },
  {
    name: "SDCCD Mesa College Fine Arts",
    category: "Commercial",
    type: "School",
    industry: "Construction",
    size: "Lowrise",
    oversightAgency: "DSA",
    estimatedValue: 1000000,
  },
  {
    name: "Wilson Middle School",
    category: "Commercial",
    type: "School",
    industry: "Construction",
    size: "Midrise",
    oversightAgency: "DSA",
    estimatedValue: 1000000,
  },
  {
    name: "Central Elemntary School",
    category: "Commercial",
    type: "School",
    industry: "Construction",
    size: "Lowrise",
    oversightAgency: "DSA",
    estimatedValue: 1000000,
  },
  {
    name: "Seal Teams 1 & 3 P892 & P964",
    category: "Commercial",
    type: "ATFP High Security Training Facility",
    industry: "Construction",
    size: "Lowrise",
    oversightAgency: "NAVFAC",
    estimatedValue: 1000000,
  },
  {
    name: "P921, P988, P949 & P950",
    category: "Commercial",
    type: "ATFP High Security Training Facility",
    industry: "Construction",
    size: "Lowrise",
    oversightAgency: "NAVFAC",
    estimatedValue: 1000000,
  },
  {
    name: "Cray Ct.",
    category: "Commercial",
    type: "Office & Biolab",
    industry: "Construction",
    size: "Midrise",
    oversightAgency: "City",
    estimatedValue: 1000000,
  },
  {
    name: "Oberlin Dr.",
    category: "Commercial",
    type: "Office & Biolab",
    industry: "Construction",
    size: "Single Story",
    oversightAgency: "City",
    estimatedValue: 1000000,
  },
  {
    name: "Boardwalk HCP",
    category: "Commercial",
    type: "Office",
    industry: "Construction",
    size: "Highrise Campus - 3 buildings",
    oversightAgency: "City",
    estimatedValue: 1000000,
  },
  {
    name: "Central Elementary",
    category: "Commercial",
    type: "School",
    industry: "Construction",
    size: "Lowrise Campus - 8 buildings",
    oversightAgency: "DSA",
    estimatedValue: 1000000,
  },
  {
    name: "Torrey Pines HS Innovation",
    category: "Commercial",
    type: "School",
    industry: "Construction",
    size: "Midrise",
    oversightAgency: "DSA",
    estimatedValue: 1000000,
  },
  {
    name: "Sharp Innovation Education Center",
    category: "Commercial",
    type: "School",
    industry: "Construction",
    size: "Midrise",
    oversightAgency: "DSA",
    estimatedValue: 1000000,
  },
];



const seedProjects = () => Projects.bulkCreate(projectsData);





module.exports = seedProjects;