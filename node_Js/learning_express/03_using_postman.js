const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended: false}))
app.get('/',(req, res)=>{
    res.send("getting root");
})

app.get('/profile',(req, res)=>{
    res.send("gettign profile");
})

app.post('/profile',(req, res)=>{
    console.log(req.body);
    const user={
        name: 'Aadarsh singh',
        adress: 'Biratnagar'
    }
    res.send(user);
});

app.listen(3002);