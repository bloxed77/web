const fs = require('fs')
const path  = require('path')
const uuid = require('uuid')
const express = require('express')
const router = express.Router();
var MongoClient = require('mongodb');
const { pathToFileURL } = require('url');
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
        dbo.collection("test").findOne({"name":newMember.name}).then(result=>{
            if (result!=null){
                console.log("account found")
                if (result.pw == newMember.pw){
                    console.log('Login successful')
                    res.redirect('/index_logged_in.html')
                }
                else{
                    res.redirect('login_bad.html')
                    console.log('wrong password')
                }
            }else{
                console.log('NOT REGISTERED')
                res.redirect('login_bad.html')
                };
            
            })
        })
    });

        
module.exports = router;