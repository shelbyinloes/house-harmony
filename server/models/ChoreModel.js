const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  task: {
    required: true,
    type: String
  },
  time: {
    required: true,
    type: String
  },
  dueDay: {
    type: Number
  },
  progress: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("chore", schema);