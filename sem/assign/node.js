let fs=require('fs');
let os = require("os")
let http = require ("http");
const { add } = require('./module');





function dir(){
    fs.mkdirSync("f1");
}





function writefile(){
    fs.writeFileSync("f1/abc.txt","yo");
    fs.appendFileSync("f1/abc.txt","\nhello");
}




function readfile(){
    fs.readFileSync("f1/abc.txt","UTF-8");
    fs.readFile("f1/abc.txt","UTF-8",(err,data)=>{
        if(err==null){
            console.log(data);
        }
        else{
            console.log(err);
        }
    })
}



function del(){
    fs.unlinkSync("f1/abc.txt");
    fs.rmdirSync("f1");
}
//dir();
//writefile();
//readfile();
//del();


function oper(){
    console.log(os.type())
    console.log(os.arch())
    console.log(os.hostname())
    console.log(os.platform)
    console.log(os.tmpdir())
    console.log(os.version())
    console.log(os.totalmem()/1024/1024/1024 + "GB")
    console.log(os.freemem()/1024/1024/1024 + "GB")
}
//oper();





    let server =http.createServer ((req,res)=>{
        res.write("<h1>aikata pratyut</h1>");
        res.write("<h1>hemlata shashindra</h1>");
        res.end();
    })
    server.listen("3000", "127.0.0.1", ()=>{
    console.log("server is listening to the port 3000 on localhost");
    })

let {sum,sub}= require("./module.js");

function expo(){
    console.log(sum(3,2));
    console.log(sub(3,2));
}
//expo();