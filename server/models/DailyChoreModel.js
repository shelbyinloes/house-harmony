const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  chore: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("dailyChore", schema);