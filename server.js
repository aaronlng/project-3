const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
var env = require("dotenv").config();
const db = require("./models");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const generateSingupRoutes = require("./routes/api/auth");

//Models

//Sync Database
db.sequelize
  .sync({ force: true })
  // .sync()
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

//setting up socket.io
const http = require("http");
const socketIO = require("socket.io");
const server = http.createServer(app);

const io = socketIO(server);

// Chat room setup
io.on("connection", socket => {
  console.log("socket connection 01");
  // socket.on("message", body => {
  //   console.log("server:", body)
  //   socket.broadcast.emit("message", {
  //     body,
  //     from: socket.id.slice(8)
  //   })
  // })

  socket.on("message", body => {
    console.log("server:", body);
    const message = body.message;
    socket.to(body.room).emit("message", {
      message,
      from: socket.id.slice(8)
    });
  });

  socket.on("join", body => {
    console.log(body);
    socket.join(body.room);
    socket.broadcast.to(body.room).emit("user join", body.user);
  });

  // socket.on("add user", (username) => {
  //   if (addedUser) return;
  //   socket.username = username;
  //   addedUser = true;
  //   socket.broadcast.emit("user joined", {
  //     username: socket.username
  //   })
  // })

  // socket.on('typing', () => {
  //   socket.broadcast.emit('typing', {
  //     username: socket.username
  //   });
  // });

  // socket.on('typing', () => {
  //   socket.broadcast.emit('typing', {
  //     username: socket.username
  //   });
  // });

  // socket.on('stop typing', () => {
  //   socket.broadcast.emit('stop typing', {
  //     username: socket.username
  //   });
  // });
}); // end chat room setup

//end socket.io setup

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({
    secret: "theTea",
    cookie: { maxAge: 60000 },
    saveUninitialized: false,
    resave: true
  })
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}


// Define API routes here
app.use(routes);

generateSingupRoutes(app, passport);

//

//set up multer
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./client/public/files");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.name);
  }
});

var upload = multer({ storage: storage }).single("file");

app.post("/upload", function(req, res) {
  upload(req, res, function(err) {
    console.log(res);
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});


//passport stratagies
require("./config/bandPassport")(passport, db.bands);
require("./config/memberPassport")(passport, db.members);

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build/index.html"));
// });


// db.sequelize.sync({ force: false }).then(function () {
//   server.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
//   });
// });
// app.use();
// Send every other request to the React app
// Define any API routes before this runs

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
