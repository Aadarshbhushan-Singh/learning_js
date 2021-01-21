const http = require("http");

let server = http
    .createServer((req, res) =>{
        console.log("Thsnks for the request!");
    })
.listen(1234, ()=>{
    console.log("I'm listening to you.");
})