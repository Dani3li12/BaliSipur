module.exports = app => {
  const stories = require("../controllers/story.controller");
  var router = require("express").Router();
  router.get("/",stories.getAll);
  
  router.get("/hello", stories.hello);
  
  router.post("/handleAdd", stories.handleAdd);
  
  router.post("/addStory", stories.addStory);

  app.use('/api/stories', router);
}