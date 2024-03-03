import * as http from 'http';
import * as fs from 'fs';

http.createServer(function (request, response) {
    console.log(request.url)
    switch (request.url) {
        case "/http-example":
            fs.readFile("./client/chat.html", function (error, content) {
                response.writeHead(200, { 'Content-Type': "text/html" });
                response.end(content, 'utf-8');
            });        
            break;
        case "/http-example/":
            fs.readFile("./client/chat.html", function (error, content) {
                response.writeHead(200, { 'Content-Type': "text/html" });
                response.end(content, 'utf-8');
            });        
            break;

        case "/http-example/chat.js":
            fs.readFile("./client/chat.js", function (error, content) {
                response.writeHead(200, { 'Content-Type': "text/javascript" });
                response.end(content, 'utf-8');
            });        
            break;
        case "/chat.js":
            fs.readFile("./client/chat.js", function (error, content) {
                response.writeHead(200, { 'Content-Type': "text/javascript" });
                response.end(content, 'utf-8');
            });        
            break;

        case "/http-example/style.css":
            fs.readFile("./client/style.css", function (error, content) {
                response.writeHead(200, { 'Content-Type': "text/css" });
                response.end(content, 'utf-8');
            });        
            break;
        case "/style.css":
            fs.readFile("./client/style.css", function (error, content) {
                response.writeHead(200, { 'Content-Type': "text/css" });
                response.end(content, 'utf-8');
            });        
            break;
    
        default:
            response.statusCode = 404
            response.end("404")
            break;
    }
}).listen(5001)