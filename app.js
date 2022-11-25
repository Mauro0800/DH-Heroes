const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.use(express.static('public'))

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','index.html')))
app.get('/views/babbage',(req,res)=>res.sendFile(path.join(__dirname,'views','babbage.html')))
app.get('/views/berners-lee',(req,res)=>res.sendFile(path.join(__dirname,'views','berners-lee.html')))
app.get('/views/clarke',(req,res)=>res.sendFile(path.join(__dirname,'views','clarke.html')))
app.get('/views/hamilton',(req,res)=>res.sendFile(path.join(__dirname,'views','hamilton.html')))
app.get('/views/hopper',(req,res)=>res.sendFile(path.join(__dirname,'views','hopper.html')))
app.get('/views/lovelace',(req,res)=>res.sendFile(path.join(__dirname,'views','lovelace.html')))
app.get('/views/turing',(req,res)=>res.sendFile(path.join(__dirname,'views','turing.html')))
app.get('*',(req,res)=>res.send('NO SE ENCUENTRA LA RUTA'))

app.listen(port, ()=>console.log(`Puerto abierto en https//localhost:${port}`));