// Install express and path
const express = require("express");
const path = require("path");

// Initialize our app
const app = express();

// Serve only our static files
app.use(express.static("./dist/BookApp"));

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: "dist/BookApp/" });
});

// Assign a port
app.listen(process.env.PORT || 8080);
