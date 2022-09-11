
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
    res.send(`The sum is: ${a}`);
  });

 

app.listen(process.env.PORT || 2000)