const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  recievedAmount: { type: Number, default: 0 },
  deadline: { type: Date, required: true },
  rewards: [String],
  images: [String],
  status: {
    type: String,
    enum: ["ongoing", "completed", "canceled"],
    default: "ongoing",
  },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  contributions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contribution",
    },
  ],
});

module.exports = mongoose.model("Project", projectSchema);
