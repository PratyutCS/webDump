let sngs=[];
let bgi=[];
let cvr=[];
let ari=[];
async function load(){
    let request = new Request("data.json");
    let response = await fetch(request);
    let obj = await response.json();
    ldmd(obj);
    ldat();
    ldjs(obj);
  }
  load();
function ldmd(obj)
{
    let md = obj['md'];
    for(let mdt of md)
    {
      for(let i=0;i<(mdt.b).length;i++)
        {
            sngs.push((mdt.m)[i]);
            bgi.push((mdt.b)[i]);
            cvr.push((mdt.c)[i]);
            ari.push((mdt.l)[i]);
        }
    }
}
function sa(array1,array2,array3) {
    for (let i = array1.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array1[i], array1[j]] = [array1[j], array1[i]];
        [array2[i], array2[j]] = [array2[j], array2[i]];
        [array3[i], array3[j]] = [array3[j], array3[i]];
    }
}
let rtn=document.querySelector(".rtn");
let disk=document.querySelector(".disk");
let oh=document.querySelector(".oh");
let ih=document.querySelector(".ih");
let bac=document.querySelector(".bac");
let plimg=document.querySelector(".plimg");
let nex=document.querySelector(".nex");
let sou=document.querySelector(".sou");
function ldjs(obj){
    rtn.src=obj['back1'];
    disk.src=obj['disk'];
    oh.src=obj['blove'];
    ih.src=obj['love'];
    bac.src=obj['back'];
    plimg.src=obj['play'];
    nex.src=obj['next'];
    sou.src=obj['nvolume'];
    console.log("called");
}
let m=0;
let im=document.querySelector(".plimg");
let song=document.querySelector(".mysong");
let dic=document.querySelector(".disk");
let sl=document.getElementById("mr");
let ico=document.querySelector(".ico");
let bgic=document.querySelector(".cov");
let li=document.querySelector(".iih");

let p = localStorage.getItem('music');
p=parseInt(p);

function ldat(){
    song.setAttribute('src', sngs[p]);
    ico.style.backgroundImage="url("+cvr[p]+")";
    bgic.style.backgroundImage="linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("+bgi[p]+")";
    sa(sngs,bgi,cvr,ari);
}

function plpa(){
    if(m==0)
    {
        play();
    }
    else{
        im.src="./play.png";
        song.pause();
        dic.style.animationPlayState = "paused";
        m=0;
    }
}

function play(){
    im.src="./pause.png";
    song.play();
    dic.style.animationPlayState = "running";
    m=1;
}

function pause(){
    im.src="./play.png";
    dic.style.animationPlayState = "paused";
    m=0;
    sl.value=0;
}

song.addEventListener("ended", function(){
    song.currentTime = 0;
    pause();
    next();
    play();
});

function lik(){
    console.log("position ",p," value ",ari[p]);
    if(ari[p]==0)
    {
        ari[p]=1;
        li.style.display="block";
    }
    else if(ari[p]==1)
    {
        ari[p]=0;
        li.style.display="none";
    }
    console.log("position ",p," updated value ",ari[p]);
}
function llik(){
    console.log("position ",p," value ",ari[p]);
    if(ari[p]==1)
    {
        li.style.display="block";
    }
    else if(ari[p]==0)
    {
        li.style.display="none";
    }
}
function next(){
    if(p+1<sngs.length){
        p=p+1;
        llik();
        song.setAttribute('src', sngs[p]);
        ico.style.backgroundImage="url("+cvr[p]+")";
        bgic.style.backgroundImage="linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("+bgi[p]+")";
        if(m==1)
        {
            play();
        }
        else{
            pause();
        }
    }
    else{
        p=-1;
        next();
    }
}

function back(){
    if((p-1)>=0){
        p=p-1;
        llik();
        song.setAttribute('src', sngs[p]);
        ico.style.backgroundImage="url("+cvr[p]+")";
        bgic.style.backgroundImage="linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("+bgi[p]+")";
        if(m==1)
        {
            play();
        }
        else{
            pause();
        }
    }
    else{
        p=sngs.length;
        back();
    }
}

let slc=document.querySelector(".slidecontainer");
let o=0;
let slider = document.getElementById("myRange");
let out=slider.value;
let mt=document.querySelector(".sou");
song.volume = (out/100);

slider.oninput = function(){
    out= this.value;
    if(out<=1){
        mt.src="mut.png";
    }
    else if(out>=90)
    {
        mt.src="max.png";
    }
    else{
        mt.src="sou.png";
    }
    song.volume = (out/100);
}

function vol(){
    if(o==0)
    {
        slc.style.display="block";
        o=1;
    }
    else
    {
        slc.style.display="none";
        o=0;
    }
}

sl.oninput = function(){
    let op = song.duration/1000;
    ou = this.value;
    song.currentTime = ou*op;
}

function UpdateSlider(){
    sl.value = song.currentTime * 1000 / song.duration;
}

setInterval(UpdateSlider, 1);
let NBR_OF_BARS;
if(window.innerWidth>=1500)
    NBR_OF_BARS= 85;
else if(window.innerWidth>=1400 && window.innerWidth<1500)
    NBR_OF_BARS= 76;
else if(window.innerWidth>=1300 && window.innerWidth<1400)
    NBR_OF_BARS= 71;
else if(window.innerWidth>=1200 && window.innerWidth<1300)
    NBR_OF_BARS= 66;
else if(window.innerWidth>=1100 && window.innerWidth<1200)
    NBR_OF_BARS= 61;
else if(window.innerWidth>=1000 && window.innerWidth<1100)
    NBR_OF_BARS= 56;
else if(window.innerWidth>=900 && window.innerWidth<1000)
    NBR_OF_BARS= 51;
else if(window.innerWidth>=800 && window.innerWidth<900)
    NBR_OF_BARS= 45;
else if(window.innerWidth>=700 && window.innerWidth<800)
    NBR_OF_BARS = 43;
else
    NBR_OF_BARS = 30;
console.log(NBR_OF_BARS)
const ctx = new AudioContext();

const audioSource = ctx.createMediaElementSource(song);

const analayzer = ctx.createAnalyser();

audioSource.connect(analayzer);
audioSource.connect(ctx.destination);

const frequencyData = new Uint8Array(analayzer.frequencyBinCount);
analayzer.getByteFrequencyData(frequencyData);
console.log("frequencyData", frequencyData);

const visualizerContainer = document.querySelector(".visualizer-container");

for( let i = 0; i < NBR_OF_BARS; i++ ) {
const bar = document.createElement("DIV");
bar.setAttribute("id", "bar" + i);
bar.setAttribute("class", "visualizer-container__bar");
visualizerContainer.appendChild(bar);
}

function renderFrame() 
{
    analayzer.getByteFrequencyData(frequencyData);
    for( let i = 0; i < NBR_OF_BARS; i++ ) 
        {
            const index = (i + 10)*2;
            const fd = frequencyData[index];
            const bar = document.querySelector("#bar" + i);
            if( !bar ) 
                {
                    continue;
                }
            const barHeight = Math.max(5, fd || 0);
            bar.style.height = barHeight + "px";
    }       
     window.requestAnimationFrame(renderFrame);
}
renderFrame();