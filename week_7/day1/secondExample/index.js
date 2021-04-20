const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("hello");

});

app.get("yawn", (req,res) => {
    res.send("yawwwnnnnn");
});

app.listen(port, () => {
    console.log(`server is on ${port}`)
})