const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
const routers = require('./items');
app.use(routers);

app.listen(1111, ()=>{
    console.log("started at port 1111");
})