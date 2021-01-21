//Server html and hyperlinks
var express=require('express');
var app=express();
var path=require('path');

// app.use("/", function(req, res, next){
//     console.log(req.url);
// });
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res){
    res.status(200);
    if (url=="/"){
    res.sendFile(path.join(__dirname, "public", "index.html"));
    }
});

app.listen(3000, function(){
    console.log("Server Listening at port 3000");
});