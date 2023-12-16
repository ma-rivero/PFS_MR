require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');


(async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('BD conectada');
    } catch (error) {
        console.log(error);
    }
})()

// Definir rutas de frontend

app.use('/', express.static(path.resolve('views','home')))

module.exports = app;