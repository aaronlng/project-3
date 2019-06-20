const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var env = require("dotenv").config();
const db = require("./models");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");

//Models
var models = require("./models");

//Sync Database
models.sequelize
  .sync({ force: true })
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// app.use();
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
