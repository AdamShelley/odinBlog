const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 5,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  blogs: [{}],
  comments: [{}],
  created_at: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("User", userModel);
