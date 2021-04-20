const express = require("express");
const app = express();
const { readFile } = require("fs");

const PORT = 3002;

// routes
// 1 Default page aka / *
// 2 /home page
// 3 /about page
// 4 FAQ
// 5 messages

app.get("/", (req, res) => {
  const message = "Welcome to my page 👋";
  res.send(message);
});

app.get("/home", (req, res) => {
  const message = "Welcome to my home 🏠";
  res.send(message);
});

app.get("/about", (req, res) => {
  const message = "Welcome to my about me 💪";
  res.send(message);
});

app.get("/faq", (req, res) => {
  const message = "Welcome to my thonking page 🤔";
  res.send(message);
});

app.post("/messages", (req, res) => {
  const message = "Post a message";
  res.send(message);
});

app.get("*", (req, res) => {
  const message = "Uh oh, this page is not real 🤭";
  readFile("./index.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.listen(PORT, () => {
  console.log(`Your server is being hosted on localhost:${PORT}`);
});