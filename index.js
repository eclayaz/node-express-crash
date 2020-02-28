const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const exphbs = require("express-handlebars");
const members = require("./Memebers");

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handlebars middleware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// This can be get done by static folder
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Homepage routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "Member app",
    members
  });
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Members API routes
app.use("/api/members", require("./routes/api/members"));

// Init middleware
app.use(logger);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started port ${PORT}`));
