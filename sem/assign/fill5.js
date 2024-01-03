let btn1=document.querySelector(".btn1");
let min=document.querySelector(".min");
let sec=document.querySelector(".sec");
let box=document.querySelector(".box");
let smbx=document.querySelector(".smbx");
let bgclr=["orange","blue","yellow","red","green","violet","indigo","pink"];
let j=1;
let i=0;
function change(){
    if(j==0){   
    if(i==0){
        i=1
        start();
    }
    else{
        stop();
        i=0;
    }
    }
}
let c;
let s;
let ij=null;
function call(){
    c=prompt("please enter time duration in minutes","");
    console.log(c);
    s=c*60;
    let mi=Math.floor(s/60);
    let se=Math.floor(s%60);
    min.innerHTML=mi.toString().padStart(2,"0");
    sec.innerHTML=se.toString().padStart(2,"0");
    j=0;
}
function tc(){
    let mi=Math.floor(s/60);
    let se=s%60;
    min.innerHTML=mi.toString().padStart(2,"0");
    sec.innerHTML=se.toString().padStart(2,"0");
    console.log(mi+" "+se);
}
function start(){
    btn1.style.backgroundColor="red";
    btn1.style.backgroundImage="url(./pause.png)";
    if(s>=0){
    ij=setInterval(()=>{
        s=s-1;
        if(s<0)
        {
            stop();
        }
        else{
            tc();
            changebgclr();
            zoom();
        }
    },1000);
    }
    else{
        stop();
    }
}
function stop(){
    btn1.style.backgroundColor="green";
    btn1.style.backgroundImage="url(./play.png)";
    if(ij!=null)
    {
        clearInterval(ij);
        ij=null;
    }
}
let rc=0
function changebgclr(){
    let len=bgclr.length;
    if(rc>=len){
        rc=0;
    }
    console.log(bgclr[rc]);
    box.style.backgroundColor=bgclr[rc];
    rc=rc+1;
}
let m=0;
function zoom(){
    if(m==0){
        smbx.style.transform="scale(1.5)";
        m=1;
    }
    else{
        smbx.style.transform="scale(1)";
        m=0;
    }
}