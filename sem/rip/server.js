const express = require('express')
const mongoose = require('mongoose')
const ejs=require('ejs')
const bodyParser = require('body-parser');
const app = express()

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}));

const uri = "mongodb+srv://AikataPratyut:aikata%40123@mscdb.0tplylu.mongodb.net/nodesDB";
const urri = "mongodb+srv://AikataPratyut:aikata%40123@mscdb.0tplylu.mongodb.net/nodesDB";
mongoose.connect(urri)
.then((result)=>console.log("works "+result))
.catch((err)=>console.log(err));

const nodesSchema = {
    title: String,
    content: String
}
const Node = mongoose.model('Node', nodesSchema)



app.get('/', (req, res) => {
    Node.find({}, function(err, node) {
        res.render('index', {
            nodesList : node
        })
    })
})

app.post("/",function(req,res){
    let newNode=new Node({
        title:req.body.title,
        content:req.body.content
    });
    newNode.save();
    res.redirect("/");
})


app.listen(80, function() {
    console.log('server is running')
})