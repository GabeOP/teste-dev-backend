const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  birth_date: String,
  sex: String,
  health_problems: { 
    problem_name: String, 
    problem_level: { type: Number, max: 2, min: 1 } 
  },
  createdIn: {type: Date, default: Date.now},
  updated: Date
});

const User = mongoose.model("user", userSchema);

module.exports = User;