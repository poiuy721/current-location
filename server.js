const express = require('express');
const fs=require('fs')
const bodyParser=require('body-parser');

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    fs.readFile('./app/views/currentLocation.html',function(error,data){
    if(error){
        console.log(error);
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    }
    })
});
require("./app/routes/board.route.js")(app);

app.listen(port,'0.0.0.0', () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});