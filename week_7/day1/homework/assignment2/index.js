const express = require("express")
const app = express()
const port = 3005

app.use(express.json())

app.get("/", (req, res) => {
  const message = "Welcome to my homepage!";
  res.send(message);
});

app.get("/store", (req, res) => {
  const message = "Welcome to my store!";
  res.send(message);
});

app.get("/contact", (req, res) => {
  const message = "Contact Me";
  res.send(message);
});

app.listen(port, () => {
  console.log(`server is on localhost:${port}`)
})