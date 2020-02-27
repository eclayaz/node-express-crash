const express = require("express");
const path = require("path");
const members = require("./Memebers");
const moment = require("moment");

const app = express();

// This can be get done by static folder
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    } : ${moment().format()}`
  );
  next();
};

// Init middleware
app.use(logger);

// Get all members
app.get("/api/members", (req, res) => {
  res.json(members);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started port ${PORT}`));
