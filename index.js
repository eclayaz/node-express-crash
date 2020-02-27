const express = require("express");
const path = require("path");
const members = require("./Memebers");
const logger = require("./middleware/logger");

const app = express();

// This can be get done by static folder
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Init middleware
app.use(logger);

// Get all members
app.get("/api/members", (req, res) => {
  res.json(members);
});

// Get single member
app.get("/api/members/:id", (req, res) => {
  res.json(members.filter(member => member.id === parseInt(req.params.id)));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started port ${PORT}`));
