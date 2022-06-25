const ratingModel = require("../models/rating.model");

exports.getAll = async (request, response) => {
    try {
        const ratings = await ratingModel.find({});
        response.send(ratings);
    } catch (error) {
        response.status(500).send(error);
    }
};

exports.addRating = async (request, response) => {
    const rating = new ratingModel(request.body);
    try {
      await rating.save();
      response.send(rating);
    } catch (error) {
      response.status(500).send(error);
    }
};