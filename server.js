const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

//setting up socket.io
const socketIO = require("socket.io")
const server = http.createrServer(app);
const io = socketIO(server)

io.on("connection", socket => {
  console.log("new client connected"),

    socket.on("incoming data", (data) => {
      socket.broadcast.emit("outgoing data", { num: data })
    })

  socket.on("disconnect", () => console.log("Client disconnect"))

})
//end socket.io setup

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
