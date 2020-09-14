//Import the packages
const express = require("express");
const liveReload = require("livereload");
const connectLiveReload = require("connect-livereload");

//Initialize the servers and the watcher

const server = express();
const livereloadServer = liveReload.createServer();

//use the middleware function
server.use(connectLiveReload());
server.use(express.static("dist"));

//watch the static changes
livereloadServer.watch("dist");

//Define the port for the express server
const port = 5000;

//listen to the port
server.listen(port, function () {
  console.log(`Server islistening to the port ${port}`);
});
