const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/story.routes");
var bodyParser = require('body-parser');
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());
mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// app.use(Router);
require("./routes/api_connector.routes")(app);

app.listen(process.env.PORT, () => {
  console.log("Server is running at port 3000");
});