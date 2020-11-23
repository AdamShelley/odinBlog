const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    required: true,
    maxlength: 100,
    minlength: 10,
    type: String,
  },
  body: {
    required: true,
    minlength: 100,
    maxlength: 5000,
    type: String,
  },
  summary: {
    required: false,
    type: String,
    maxLength: 50,
  },
  user: {
    required: true,
    default: "Admin",
    type: String, // Mongoose object in future
  },

  comments: [
    {
      type: String, // Mongoose object in future,
    },
  ],
  postedYet: {
    type: Boolean,
    required: true,
    default: false,
  },
  image: {
    type: String,
    required: false,
    default:
      "https://images.pexels.com/photos/1612353/pexels-photo-1612353.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1612353.jpg&fm=jpg",
  },
  created_at: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
