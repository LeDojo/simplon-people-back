const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fullName: String,
  userName: String, // C'est le login de notre user
  password: String,
  email: String,
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }], // Project fait référence au projet qui existe.
  profileImage: String,
  isAdmin: { type: Boolean, default: false },
  userType: {
    type: String,
    enum: ["regularUser", "contributor", "owner"], // Le user peut être ce qu'il y a entre les crochets en fonction de ses actions.
    default: "regularUser",
  },
});

module.exports = mongoose.model("User", userSchema);
