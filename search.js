const uuid = require('uuid')
const express = require('express')
const router = express.Router();
var MongoClient = require('mongodb');
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology: true}, function(err, db) {
    var dbo = db.db("mydb");;
    var cursor =dbo.collection('test').find()
    let OneName =dbo.collection('test').findOne({"name":"2"})
    var Myacc
    OneName.then(res=>{
        console.log(res)
    })
    async function start() {
    await cursor.forEach(doc => console.log(doc))
    }
    });

