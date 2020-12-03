const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    time: { type: Date, required: true },
    zoom: { type: String, required: true },
    purpose: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = User = mongoose.model("User", userSchema);
