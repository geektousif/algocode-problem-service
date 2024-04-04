const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title can't be empty"],
  },
  description: {
    type: String,
    required: [true, "Description can't be empty"],
  },
  difficulty: {
    type: String,
    enum: ["east", "medium", "hard"],
    required: [true, "Difficulty can't be empty"],
    default: "easy",
  },
  testCases: [
    {
      input: {
        type: String,
        required: [true, "Input can't be empty"],
      },
      output: {
        type: String,
        required: [true, "Output can't be empty"],
      },
    },
  ],
  editorial: {
    type: String,
  },
});

const Problem = mongoose.model("Problem", problemSchema);

module.exports = Problem;
