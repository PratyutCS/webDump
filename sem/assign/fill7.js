let name=['p','q'];
let vms1=[1,4];
let vms2=[2,5];
let vms3=[3,6];
var rr=0;
let toggle=document.querySelector(".toggle");
function lol(){
    let n=document.querySelector(".n").value;
    let ms1=document.querySelector(".ms1").value;
    let ms2=document.querySelector(".ms2").value;
    let ms3=document.querySelector(".ms3").value;
    name.push(n);
    vms1.push(ms1);
    vms2.push(ms2);
    vms3.push(ms3);
    rr+=1;
    console.log(rr+" "+n+" "+ms1+" "+ms2+" "+ms3);
    next();
}
function d(){
    document.querySelector(".r").value=rr+1;
    document.querySelector(".n").value=name[rr];
    document.querySelector(".ms1").value=vms1[rr];
    document.querySelector(".ms2").value=vms2[rr];
    document.querySelector(".ms3").value=vms3[rr];
}
function display(){
    rr=prompt("enter roll number");
    rr-=1;
    let len=name.length;
    if(rr<len){
        d();
    }
    else{
        alert("cannot display wrong entry");
    }
}
function clear(){
    document.querySelector(".n").value="";
    document.querySelector(".ms1").value="";
    document.querySelector(".ms2").value="";
    document.querySelector(".ms3").value="";
}
function next(){
    let len=vms1.length;
    console.log(len+" "+rr);
    if(rr>=len-1 ){
        if(rr==len)
        {
            alert("cannot move forward");
            return ;
        }
        rr+=1;
        document.querySelector(".r").value=rr+1;
        clear();
        document.querySelector(".toggle").innerHTML="enroll";
        document.querySelector(".toggle").onclick=lol;
    }
    else{
        rr+=1;
        d();
        document.querySelector(".toggle").innerHTML="update";
        document.querySelector(".toggle").onclick=update;
    }
}
function back(){
    if(rr<1)
    {
        alert("cannot go back");
    }
    else{
    rr-=1;
    d();
    document.querySelector(".toggle").innerHTML="update";
    document.querySelector(".toggle").onclick=update;
    }
}
function update(){
    let n=document.querySelector(".n").value;
    let ms1=document.querySelector(".ms1").value;
    let ms2=document.querySelector(".ms2").value;
    let ms3=document.querySelector(".ms3").value;
    name[rr]=n;
    vms1[rr]=ms1;
    vms2[rr]=ms2;
    vms3[rr]=ms3;
    rr+=1;
    console.log("updating "+rr+" "+n+" "+ms1+" "+ms2+" "+ms3);
}
d();