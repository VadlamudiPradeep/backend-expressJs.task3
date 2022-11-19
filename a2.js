//const http = require('http');
const express = require('express');

const app = express();
app.use((req,res,next)=>{

    console.log("In the middle ware");
    next();// next() alows the request to contiinue to the next middleware in line 
});
app.use((req,res,next)=>{
    let value = "Hi wlcome to expres.js" ;
let key1 = "Hi";
    console.log("In the another middle ware")
    res.send(`<h1>${key,value}</h1>`)
    res.send('<h1>hello to from express js</h1>')
   
})
//const server = http.createServer(app);
app.listen(3000);
// const server = http.createServer(app);
// server.listen(4000);