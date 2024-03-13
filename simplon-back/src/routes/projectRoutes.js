const express = require("express");
const {
  getAllProjects,
  getProjectById,
  createProject,
} = require("../controllers/projectController");
const projectRouter = express.Router();

projectRouter.get("/all", getAllProjects);
projectRouter.get("/:id", getProjectById);
projectRouter.post("/create", createProject);

module.exports = projectRouter;
