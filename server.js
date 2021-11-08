//Install express server
const { APP_BASE_HREF } = require("@angular/common");
const express = require("express");
const path = require("path");

const app = express();

// serve only the static files from the dist directory
app.use(express.static("./dist/ANGULAR-BOOTCAMP_STUDENTS-APP"));

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: "dist/ANGULAR-BOOTCAMP_STUDENTS-APP/" });
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
