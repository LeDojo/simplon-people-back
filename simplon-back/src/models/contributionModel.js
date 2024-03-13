const mongoose = require("mongoose");

const contributionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  contributor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contribution", contributionSchema);
