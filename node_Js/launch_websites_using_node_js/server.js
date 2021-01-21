const http=require('http');
const fs=require('fs');

const hostName='127.0.0.1';
const port=3000;

const fileContent=fs.readFileSync('index.html')
const server=http.createServer(function(req, res){
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end(fileContent);
});

server.listen(port, hostName, function(){
    console.log("Server Started at port 3000");
});