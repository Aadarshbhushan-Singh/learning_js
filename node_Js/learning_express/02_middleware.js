const express = require('express');
const app=express();

app.use((req, res, next)=>{
    console.log("HEllooooo guys!");
    next();
});
app.get('/',(req, res)=>{
    res.send("This is new server 3001");
});

app.listen(3001);