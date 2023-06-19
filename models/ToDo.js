// Create model mongoose ToDo
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ToDoSchema = new Schema({
  title: String,
  isCompleted: {
    type: Boolean,
    default: false,
  },
  description: String,
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model("ToDo", ToDoSchema);
