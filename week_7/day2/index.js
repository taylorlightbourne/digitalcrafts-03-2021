const express = require("express")
const app = express()
const port = 3002

app.use(express.json())

app.get("/", (req, res) => {
    const message = "This is my home page"
    res.send(message)
});

app.get("/about", (req, res) => {
    const message = "This is my about page"
    res.send(message)
});

app.post("/team", (req, res) => {
    const {name,age} = req.body[0];
    const message = `Team member ${name} is ${age} years old`;
    res.send(message)
});

app.get("/faq", (req, res) => {
    const message = "This is my faq page"
    res.send(message)
});

app.listen(port, () => {
    console.log(`server is on localhost:${port}`)
})