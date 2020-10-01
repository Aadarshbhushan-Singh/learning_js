const express = require('express');
const bodyParser=require('body-parser');
//extract the entire body portion of an incoming request stream and exposes it on req. body

const app=express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/',(req, res)=>{
    // req.query
    console.log(req.query);
    // req.body
    // req.header
    // req.params

    res.send("getting root");
});

app.listen(3003);
