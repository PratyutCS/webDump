function rip(){
    window.open("./index.html#home", "_self");
}


let z=document.querySelector(".lab1");
let m=document.querySelector(".lab2");
let n=document.querySelector(".lab3");
let x=document.querySelector(".email");
let y=document.querySelector(".password");
let c=document.querySelector(".cpassword");
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
    if(c.value!=""){
        addn();
    }
    else{
        remn();
    }
}
setInterval(inp, 100);

function addz()
{
    z.style.transform="translateY(-60px)"
    z.style.letterSpacing="1px";
    z.style.color="white";
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
    m.style.color="bwhite";
}
function remm()
{
    m.style.transform="translateY(-30px)"
    m.style.letterSpacing="2px";
    m.style.color="#999";
}

function addn()
{
    n.style.transform="translateY(-60px)"
    n.style.letterSpacing="1px";
    n.style.color="bwhite";
}
function remn()
{
    n.style.transform="translateY(-30px)"
    n.style.letterSpacing="2px";
    n.style.color="#999";
}

const cursor = document.querySelector(".cursor");
    var timeout;

    //follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;

      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      cursor.style.display = "block";

      //cursor effects when mouse stopped
      function mouseStopped(){
        cursor.style.display = "none";
      }
      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 1000);
    });

    //cursor effects when mouseout
    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });