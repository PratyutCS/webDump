const express = require("express");
const app = express();
const mongoose=require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://AikataPratyut:aikata%40123@mscdb.0tplylu.mongodb.net/nodesDB", {useNewUrlParser:true},{useUnifiedTopology:true})
.then((result)=>console.log("works "+result))
.catch((err)=>console.log(err));

//create schema
const nodesSchema={
    title:String,
    content:String
}

const Node = mongoose.model("Node",nodesSchema);

app.get("/",function(req,res) {
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    let newNode=new Node({
        title:req.body.title,
        content:req.body.content
    });
    newNode.save();
    res.redirect("/");
})

app.listen(3000,function() {
    console.log("server is running");
})