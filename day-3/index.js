import http from "http"

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Backend is working\nBakc");
})

server.listen(8000, () => {
    console.log("Server is running");
})