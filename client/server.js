const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.static(path.join(__dirname, "public")));

// Home route to watch live streaming
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// publish route to start live streaming
app.get("/publish", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "publish.html"));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server is running on port number 8080 on the base url (http://localhost:8080)");
});