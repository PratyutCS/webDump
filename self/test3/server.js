require('dotenv').config();
let Express = require('express')
let path = require('path')
const mongoose = require('mongoose')
let bodyparser=require('body-parser');


let app = new Express()

app.use(bodyparser.urlencoded({extended: true}));

let htmlfolder = path.join(__dirname, "/public/html");

const urri = process.env.mongoDbKey;

const nodesSchema = {
    name: String,
    data1: String,
    data2: String
}
const Node = mongoose.model('userdata', nodesSchema)



app.get("/", (req, res) => {
    res.sendFile(path.join(htmlfolder, "index.html"));
})

app.post("/",function(req,res){
    let name=req.body.name;
    let data1=req.body.data1;
    let data2=req.body.data2;
    let newNode=new Node({
        name:name,
        data1:data1,
        data2:data2
    });
    newNode.save();
    res.redirect("/");
})

app.get("/data", (req, res) => {
    Node.find({})
    .then(documents => {
        res.send(documents);
        console.log(documents[0]['name']);
        console.log(documents.length);
        mongoose.connection.close();
    })
    .catch(err => {
        console.error(err);
        mongoose.connection.close();
    });
})

app.get("*", (req, res) => {
    res.sendFile(path.join(htmlfolder, "error.html"));
})

const PORT= process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server is running at lolz");
    mongoose.connect(urri)
    .then((result)=>console.log("works "+result))
    .catch((err)=>console.log(err));
})