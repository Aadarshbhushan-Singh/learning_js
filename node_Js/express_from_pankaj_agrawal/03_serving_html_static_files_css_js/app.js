//Serve html, css and js file through express static middleware concept
var express=require('express');
var app=express();
var path=require('path');

// This will print the url that is being called by index.html
// app.use("/", function(req, res, next){
//     console.log(req.url);
//     next();
// });

//This represents that no special permission is required to connect this path.
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res){
    res.status(200);
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, function(){
    console.log("Serving port at localhost 3000");
});