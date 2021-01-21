// express middleware
var express=require('express');
var app=express();
var path=require('path');

//Call this middleware before route not after.
app.use("/", function(req, res, next){ //This is middleware which will be listened before the response.
    console.log("This is second output.");
    next(); //If this next() is not used then program will get stuck here.
});

app.get("/", function(req, res){ //This will give response when it will listen to home i.e "/"
    console.log("Hello world this is port 3000.");
});

app.listen(3000, function(){
    console.log("Server listening at 3000");
});