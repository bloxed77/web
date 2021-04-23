const uuid = require('uuid')
const express = require('express')
const router = express.Router();
var MongoClient = require('mongodb');
var url = "mongodb://localhost:27017/mydb";
router.post('/',(req,res)=>{
    const newMember={
        id:uuid.v4(),
        name:req.body.username,
        pw:req.body.password,
        status:"active"
    };
    MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology: true}, function(err, db) {
        var dbo = db.db("mydb");;
        dbo.collection("test").insertOne(newMember);
        console.log('user added');
        });
        res.redirect('/');
        });


module.exports = router;