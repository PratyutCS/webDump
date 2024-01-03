let Express = require('express')
let path = require('path')
const mongoose = require('mongoose')
let bodyparser=require('body-parser');


let app = new Express()

app.use(bodyparser.urlencoded({extended: true}));

app.use(Express.static(__dirname + '/public/css'));
app.use(Express.static(__dirname + '/public/images'));
app.use(Express.static(__dirname + '/public/js'));
app.use(Express.static(__dirname + '/public/json'));

let htmlfolder = path.join(__dirname, "/public/html");

app.set('view engine','ejs');
app.set("views",path.join(__dirname, "./templates/views"))

const urri = "mongodb+srv://AikataPratyut:aikata%40123@mscdb.0tplylu.mongodb.net/nodesDB";

mongoose.connect(urri)
.then((result)=>console.log("works "+result))
.catch((err)=>console.log(err));

const nodesSchema = {
    title: String,
    content: String
}
const Node = mongoose.model('Node', nodesSchema)



app.get("/login", (req, res) => {
    res.sendFile(path.join(htmlfolder, "lgbx.html"));
})

app.post("/index", async(req, res) => {
    try{
        const email= req.body.email;
        const pass = req.body.password;
        console.log(email+" -- "+pass);

        const useremail=await Node.findOne({title:email});
        if(useremail.content === pass){
            res.status(201).render('welcome',{name:useremail.title});
        }
        else{
            res.send("incorrect password");
        }

    }
    catch(error){
        console.log(error);
        res.status(400).send(error);
    }
})


app.get("/register", (req, res) => {
    res.sendFile(path.join(htmlfolder, "register.html"));
})

app.get("/forget", (req, res) => {
    res.sendFile(path.join(htmlfolder, "forgetpage.html"));
})

app.get("/index", (req, res) => {
    res.render('index.ejs');
})

app.get("*", (req, res) => {
    res.sendFile(path.join(htmlfolder, "error.html"));
})


app.listen("80", () => {
    console.log("Server is running");
})