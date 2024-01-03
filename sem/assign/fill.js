var i=0;
function lol(){
    var a=document.querySelector(".nbq");
    var b=document.querySelector(".nbw");
    let dis1=a.dataset.distance+"px";
    let spd1=a.dataset.speed+"s";
    let dis2=b.dataset.distance+"px";
    let spd2=b.dataset.speed+"s";
    ddis1=30+"px";
    if(i==1)
    {
    a.style.backgroundColor="red";
    b.style.backgroundColor="blue";
    a.style.left=ddis1;
    b.style.left=ddis1;
    a.style.transitionDuration=spd1;
    b.style.transitionDuration=spd2;
    i=0;
    }
    else{
    a.style.backgroundColor="yellow";
    b.style.backgroundColor="green";
    a.style.left=dis1;
    b.style.left=dis2;
    a.style.transitionDuration=spd1;
    b.style.transitionDuration=spd2;
    i=1;
    }
}