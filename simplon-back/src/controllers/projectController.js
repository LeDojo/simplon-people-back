const Project = require("../models/projectModel");

const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      goalAmount,
      recievedAmount,
      deadline,
      rewards,
      images,
      status,
      ownerId,
    } = req.body;

    const project = new Project({
      title,
      description,
      category,
      goalAmount,
      recievedAmount,
      deadline,
      rewards,
      images,
      status,
      ownerId,
    });

    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const allProjects = await Project.find();
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProjectById = async (req, res) => {
  try {
    const id = req.params.id;

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createProject, getAllProjects, getProjectById };
