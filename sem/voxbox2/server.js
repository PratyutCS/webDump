require('dotenv').config();
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
app.use(Express.static(__dirname + '/public/music'));

let htmlfolder = path.join(__dirname, "/public/html");

app.set('view engine','ejs');
app.set("views",path.join(__dirname, "./templates/views"))

const urri = process.env.mongoDbKey;

mongoose.connect(urri)
.then((result)=>console.log("works "+result))
.catch((err)=>console.log(err));

const nodesSchema = {
    title: String,
    content: String
}
const Node = mongoose.model('Node', nodesSchema)



app.get("/", (req, res) => {
    res.sendFile(path.join(htmlfolder, "lgbx.html"));
})

app.post("/index", async(req, res) => {
    try{
        const email= req.body.email;
        const pass = req.body.password;
        console.log(email+" -- "+pass);

        const useremail=await Node.findOne({title:email});
        if(useremail.content === pass){
            res.status(201).render('index',{name:useremail.title});
        }
        else{
            res.send("incorrect password");
        }

    }
    catch(error){
        console.log(error);
        res.status(400).send("error cannot find username :  "+error);
    }
})


app.get("/player", (req, res) => {
    res.sendFile(path.join(htmlfolder, "musicPlayer.html"))
})


app.get("/register", (req, res) => {
    res.sendFile(path.join(htmlfolder, "register.html"));
})


app.post("/",function(req,res){
    let useru=req.body.title;
    let pass1=req.body.content1;
    let pass2=req.body.content2;
    if(pass1===pass2){
        let pass=pass2;
    let newNode=new Node({
        title:useru,
        content:pass
    });
    newNode.save();
    res.redirect("/");
    }
    else{
        res.send("password does not match");
    }
})


app.get("/forget", (req, res) => {
    res.sendFile(path.join(htmlfolder, "forgetpage.html"));
})

// app.get("/index", (req, res) => {
//     res.render('index.ejs');
// })

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