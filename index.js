const express = require("express");
const path = require("path");
const members = require("./Memebers");

const app = express();

// This can be get done by static folder
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Get all members
app.get("/api/members", (req, res) => {
  res.json(members);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started port ${PORT}`));
