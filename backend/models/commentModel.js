const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  user: {
    required: true,
  },
  body: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 2,
  },
  rating: {
    type: Number,
    default: 0,
  },
  created_at: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("Comment", commentSchema);
