const storyModel = require("../models/story.model");

exports.getAll = async (request, response) => {
    try {
      const stories = await storyModel.find({});
      response.send(stories);
    } catch (error) {
        response.status(500).send(error);
    }
};

exports.hello = async (request, response) => {
    try {
      response.send("hello world");
    } catch (error) {
      response.status(500).send(error);
    }
};

exports.handleAdd = async (request, response) => {
    const story = new storyModel({
        title: "הארנב והצב",
        author: "אזופוס",
        readingTime: 2
    });
    try {
      await story.save();
      response.send(story);
    } catch (error) {
      response.status(500).send(error);
    }
};

exports.addStory = async (request, response) => {
    const story = new storyModel(request.body);
    try {
      await story.save();
      response.send(story);
    } catch (error) {
      response.status(500).send(error);
    }
};