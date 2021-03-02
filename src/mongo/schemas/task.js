const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Task = mongoose.model("Task", schema);

module.exports = Task;
