console.log("hi")
const http = require("http")
const addess = "127.0.0.1"
const PORT = 3002

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain");
    res.end("hello");
});

server.listen(port, address, () => {
    console.log(`server is on http://${address}:${PORT}`);

});