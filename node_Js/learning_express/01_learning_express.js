const express = require ('express');
const app = express();
app.get('/', (req, res)=>{
    res.send("Hello world!");
});
app.get('/',(req, res) =>{
    res.send("Hi");
});
app.post('/profile',(req, res)=>{
    res.send("getting root");
});
app.post('/profile',(req, res) =>{
    // res.send("This is not heading.");
    // res.send("<h1>Hello</h1>"); //We can include html tag.

    const user={
        name: 'Aadarsh',
        adress: 'Biratnagar'
    }
    res.send(user);

});

app.listen(3000);
