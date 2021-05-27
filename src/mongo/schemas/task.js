const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    completed: { type: Boolean, required: true },
    parentCollection: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Collection" },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Task = mongoose.model("Task", schema);

module.exports = Task;
