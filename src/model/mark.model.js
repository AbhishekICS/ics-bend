const mongoose = require("mongoose");

const markSchema = new mongoose.Schema(
  {
    obtain: { type: String, required: true },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Subjects"
    },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Mark", markSchema);
