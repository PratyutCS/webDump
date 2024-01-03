function home()
{
    window.open("index.ejs","_self");
}
let z=document.querySelector(".lab1");
let m=document.querySelector(".lab2");
let x=document.querySelector(".email");
let y=document.querySelector(".password");
function inp(){
    if(x.value!=""){
        addz();
    }
    else{
        remz();
    }
    if(y.value!=""){
        addm();
    }
    else{
        remm();
    }
}
setInterval(inp, 100);

function addz()
{
    z.style.transform="translateY(-60px)"
    z.style.letterSpacing="1px";
    z.style.color="black";
}
function remz()
{
    z.style.transform="translateY(-30px)"
    z.style.letterSpacing="2px";
    z.style.color="#999";
}
function addm()
{
    m.style.transform="translateY(-60px)"
    m.style.letterSpacing="1px";
    m.style.color="black";
}
function remm()
{
    m.style.transform="translateY(-30px)"
    m.style.letterSpacing="2px";
    m.style.color="#999";
}