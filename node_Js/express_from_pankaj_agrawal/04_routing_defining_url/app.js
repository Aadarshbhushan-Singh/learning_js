//Routing and defining url and sending response
var express=require('express');
var app=express();
var path=require('path');

app.get("/", function(req, res){
    res.status(200);
    res.send("We are at home page");
});

app.get("/hello", function(req, res){
    res.status(200);
    res.send("Hello World, This is hello page");
});


app.listen(3000, function(){
    console.log("Server Listening at port 3000");
});