// Install Express and Path
const express = require("express");
const path = require("path");

// Initialize app
const app = express();

// Serve the static files
app.use(express.static("./dist/BookApp"));

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: "dist/BookApp/" });
});

// Assign a port to your app
app.listen(process.env.PORT || 8080);
