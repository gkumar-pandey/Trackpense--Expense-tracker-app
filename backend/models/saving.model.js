const mongoose = require("mongoose");
const savingSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      default: 0,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

const Saving = mongoose.model("Saving", savingSchema);
module.exports = Saving;
