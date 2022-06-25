module.exports = app => {
    const ratings = require("../controllers/rating.controller");
    var router = require("express").Router();
  
    router.get("/", ratings.getAll);
        
    router.post("/addRating", ratings.addRating);
  
    app.use('/api/ratings', router);
  }