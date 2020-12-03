const mongoose = require("mongoose");

const { Schema } = mongoose;
const questionSchema = new Schema(
  {
    name: { type: String },
    category: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = Questions = mongoose.model("Que", questionSchema);
