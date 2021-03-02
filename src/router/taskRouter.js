const express = require("express");
const { TaskController } = require("../controller");

const TaskRouter = express.Router();

TaskRouter.post("/", TaskController.createTask);

TaskRouter.get("/", TaskController.findAllTasks);

TaskRouter.get("/:id", TaskController.findOneTask);

TaskRouter.post("/search", TaskController.searchTask);

TaskRouter.put("/:id", TaskController.updateTask);

TaskRouter.delete("/:id", TaskController.deleteTask);

module.exports = { TaskRouter };
