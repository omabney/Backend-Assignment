const express = require('express');
const bodyParser =require('body-parser');
const professionalRoutes = require('./routes/professional');

const app = express();
app.use(bodyParser.json());

//For bypassing cors error
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');  
    res.setHeader('Access-Control-Allow_Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/professional', professionalRoutes);

app.listen(8080); 