// Install express and path
const express = require("express");
const path = require("path");

// initialize our app
const app = express();

// Serving the static files of our app
app.use(express.static("./dist/BookApp"));

// Sending request
app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: "dist/BookApp" });
});

// Assigning a port
app.listen(process.env.PORT || 8080);
