// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// LocalHost and port to deploy to Heroku
const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  