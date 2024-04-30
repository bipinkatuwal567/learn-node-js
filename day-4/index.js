import http from "http";

const server = http.createServer((req, res) => {
    switch(req.url){
        case "/books": 
        console.log(req.method);
        res.writeHead(200);
        res.end("Books page");
        break;
        
        case "/others": 
        res.writeHead(200);
        res.end("Others page");
        break;

        default: 
        res.writeHead(200);
        res.end("Backend is working");
        break;
    }
})

server.listen(8000, () => {
    console.log("Server running");
});