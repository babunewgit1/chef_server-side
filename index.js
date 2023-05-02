const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());

const main = require("./data/main.json");
const feedback = require("./data/feedback.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/feedback", (req, res) => {
  res.send(feedback);
});

app.get("/main", (req, res) => {
  res.send(main);
});

app.get("/main/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const singleData = main.find((sData) => parseInt(sData.id) === id);
  res.send(singleData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
