const http=require('http');
const server=http.createServer(()=>{
    console.log("Server connected!");
})
//Go to browser and open localhost:3000
server.listen(3000);

const nextServer=http.createServer((request, response)=>{
    // console.log('headers',request.headers);
    console.log('method',request.method);
    console.log('url',request.url);
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Hello world!</h1>');
});

nextServer.listen(3001);