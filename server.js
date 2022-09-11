var PORT = process.env.PORT || 2000;
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/add", (req, res) => {
  const { a } = req.body;
  res.send({
    result: String(a)
  });
});

app.listen(2000, () => {
  console.log(`Server is running on port 2000.`);
});