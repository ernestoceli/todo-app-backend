const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    isDefaultCollection: { type: Boolean, required: true },
    icon: { type: String, required: true },
    color: { type: String, required: true },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Collection = mongoose.model("Collection", schema);

module.exports = Collection;
