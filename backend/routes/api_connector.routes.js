module.exports = app => {
    require("./story.routes")(app);
    require("./rating.routes")(app);
};