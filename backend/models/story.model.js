const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  readingTime: {
    type: Number,
    required: true
  },
  views: {
    type: Number,
    default: 0
  }
});

const Story = mongoose.model("Story", StorySchema);

module.exports = Story;