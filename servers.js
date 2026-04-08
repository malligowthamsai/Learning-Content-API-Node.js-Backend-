const express = require("express");
const app = express();
const PORT = 3000;

const subjects = require("./data/subjects.json");

app.get("/", (req, res) => {
  res.send("Learning API is running 🚀");
});

// Get all subjects
app.get("/subjects", (req, res) => {
  res.json(subjects);
});

// Get one subject
app.get("/subjects/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const subject = subjects.find(s => s.id === id);

  if (!subject) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json(subject);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
