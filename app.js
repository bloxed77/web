const express = require('express');
const uuid = require('uuid');
const path = require('path');
const logger = require('./middleware/logger');
const app = express()
const ad_to_db  =  require('./register')
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(logger)
app.use("/auth-register",ad_to_db)
app.use("/auth-login",require('./login'))





const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));