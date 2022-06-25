const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
    stars: {
    type: Number,
    required: true,
    },
    storyId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});

const Rating = mongoose.model("Rating", RatingSchema);

module.exports = Rating;