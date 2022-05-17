const { Experiences } = require("../models");

const experiencesData = [
  {
    company: "Associate Mechanical Contractors",
    title: "Project/Preconstruction Manager",
    dateRange: "Jun 2020 – Feb 2022",
    cityState: "San Diego, CA",
    description1: "Direct preconstruction activities, budget estimates, and staffing requirements in accordance with the defined project scoping and scheduling; prepare periodic status reports to communicate project scopes and ensure project safety.",
    description2: "Manage estimating, engineering, and preconstruction activities for increased operations efficiency, facilitating supported business development objectives by satisfying key metric across the company.",
    description3: "Lead program budgets assembly and program management with minimal guidance; coordinate with the project team in establishing comprehensive budget estimates and schedules incorporating operations standards.",
    description4: "Identify and report risks by blending design and construction phases while developing cost estimates and other RFP deliverables.",
    description5: "Utilize Building Information Modeling (BIM) to design 3D modeling concepts that will streamline a facility’s mechanical systems, creating quality systems and costs savings.",
    description6: "Monitor blueprint version accuracies using tables and smartphones, allowing for verification of field systems during installation.",
    description7: "Develop collaborative synergy established with the design teams, optimizing overall project operations and workflow by implementing M365 architecture, spreadsheets, and other latest project management and design software.",
    description8: "Provided strategic support in driving business goals, overseeing programs, projects, and operations to boost business scalability for construction and project closeout phases of a development project.",
    description9: "Assisted in developing project plans and effective management, driving project completion within timelines, quality, and budgets using a collaborative approach for projects that allow for innovation and add value to the project.",
    description10: "Accomplished budgetary objectives and project constraints based on financial analysis by examining the challenges of critical environments, return on investment, energy costs, constructability, etc.",
    description11: "Monitored the overall progress of projects by ensuring the use of sound construction practices and utilizing different verification techniques to make appropriate changes to the project scope.",
    description12: "Collaborated with engineers to help expedite the completion of drawings, provide constructability and accessibility solutions, and offer enhancements to the system's operational performance with sustainable efficiency.",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    company: "A.O REED & CO.",
    title: "BIM/VDC Database Manager/Mechanical CAD Detailer",
    dateRange: "Dec 2014 – Nov 2019",
    cityState: "San Diego, CA",
    description1: "Produced detailed constructible shop drawings based on contract documents, design criteria, and instructions using sensible and strategic practices to maximize productivity throughout all phases of the construction process.",
    description2: "Interacted with clients to understand their specific BIM/VDC requirements to ensure smooth BIM workflows throughout the entire project duration, from contract-award stage to final handover of BIM deliverables.",
    description3: "Implemented custom software solutions, using Lisp, VBA and C#.Net, to increase efficiency and productivity within workflow and processes.",
    description4: "Implemented custom software solutions, using Lisp, VBA and C#.Net, to increase efficiency and productivity within workflow and processes.",
    description5: "Delivered compatible, consistent, and accurate CAD and BIM data to clients in compliance with the BIM Execution Plan.",
    description6: "Served as the primary point of communication between the project management teams and stakeholders regarding BIM issues.",
    description7: "Provided leadership to project teams to ensure all developed BIM Execution Plans were maintained during the project process.",
    description8: "Developed and implemented effective processes, procedures, templates, and innovative model contents for project deliveries.",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    company: "Elfin Forest/Harmony Grove Fire Department ",
    title: "Firefighter/EMT ",
    dateRange: "Jan 2008 – Dec 2013 ",
    cityState: "Escondido, CA",
    description1: "Maintained current level of emergency medication and firefighting knowledge to mediate on community emergency calls.",
    description2: "Utilized experience and technical knowledge effectively, allowing for enhanced crew capabilities, fire protection, preparedness, planning, organization, diverse background experience, and critical ingenuity metrics.",
    description3: "Delivered crew supervision, technical expertise, accountability, and knowledge of safe work practices; provided support to Engine Boss to ensure high-quality workflows and directions to crew.",
    description4: "",
    description5: "",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
];





const seedExperiences = () => Experiences.bulkCreate(experiencesData);






module.exports = seedExperiences;
