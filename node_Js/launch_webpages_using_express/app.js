const express = require("express");
const app = express();
// app.use(express.static("public"));
const path=require("path");
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => {
  res.render(__dirname + '/index.html');
})

app.listen(3000, function() {
  console.log("Running on port 3000.");
});