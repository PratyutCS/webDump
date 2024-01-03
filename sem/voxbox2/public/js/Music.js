let sngs=[];
let bgi=[];
let cvr=[];
let ari=[];
async function load(){
    let request = new Request("data.json");
    let response = await fetch(request);
    let obj = await response.json();
    ldmd(obj);
    let cover=loadcover();
    loadaudio(cover);
    loadheader(cover);
    loaddisk(cover);
    loadico(cover);
    loadabars(cover);
    loadvolume(cover);
    loadpl(cover,obj);
    ldat();
    ldjs(obj);
    setInterval(UpdateSlider, 1);
    song.addEventListener("ended", function(){
        song.currentTime = 0;
        pause();
        next();
        play();
    });
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
let rtn;
let disk;

function ldjs(obj){
    rtn.src=obj['back1'];
    disk.src=obj['disk'];
    console.log("called");
}
let m=0;
let im;
let song;
let dic;
let sl;;
let ico;
let bgic;
let li;

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

let slc;
let o=0;
let slider;
let out;

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


function UpdateSlider(){
    sl.value = song.currentTime * 1000 / song.duration;
}

const NBR_OF_BARS= 85;

function ffrr(){
    const ctx = new AudioContext();

    const audioSource = ctx.createMediaElementSource(song);

    const analayzer = ctx.createAnalyser();

    audioSource.connect(analayzer);
    audioSource.connect(ctx.destination);

    const frequencyData = new Uint8Array(analayzer.frequencyBinCount);
    analayzer.getByteFrequencyData(frequencyData);
    console.log("frequencyData", frequencyData);




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
}


function loadcover(){
    let body=document.querySelector("body");
    let div=document.createElement("div");
    div.className="cov";
    body.appendChild(div);
    bgic=div;
    return div;
}


function loadaudio(cover){
    let aud=document.createElement("audio");
    aud.className="mysong";
    let soc=document.createElement("source");
    soc.type="audio/mp3";
    aud.appendChild(soc);
    song=aud;
    cover.appendChild(aud);

}

function loadheader(cover){
    let header=document.createElement("header");
    let nav=document.createElement("nav");
    let anc=document.createElement("a");
    anc.className="fl"
    let img=document.createElement("img");
    img.className="rtn";
    img.onclick=function(){
        history.back();
    }
    rtn=img;
    anc.appendChild(img);
    nav.appendChild(anc);
    header.appendChild(nav);
    cover.appendChild(header);
}


function loaddisk(cover){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.className="disk";
    disk=img;
    dic=disk;
    div.appendChild(img);
    cover.appendChild(div);
}


function loadico(cover){
    let icoo=document.createElement("div");
    icoo.className="ico";
    ico=icoo;
    cover.appendChild(icoo);
}

function loadabars(cover){
    let vc=document.createElement("div");
    vc.className="visualizer-container";
    let visualizerContainer=vc;

    for( let i = 0; i < NBR_OF_BARS; i++ ) {
        const bar = document.createElement("DIV");
        bar.setAttribute("id", "bar" + i);
        bar.setAttribute("class", "visualizer-container__bar");
        visualizerContainer.appendChild(bar);
    }
    cover.appendChild(vc);
    ffrr();
}


function loadvolume(cover){
    let div1=document.createElement("div");
    let inp=document.createElement("input");

    div1.className="slidecontainer";
    inp.type="range";
    inp.min="0";
    inp.max="100";
    inp.value="30"
    inp.className="slider";
    inp.id="myRange";
    out=inp.value;
    song.volume = (out/100);
    inp.oninput = function(){
        out= this.value;
        song.volume = (out/100);
    }
    div1.appendChild(inp);
    slc=div1;
    cover.appendChild(div1);
}


function loadpl(cover,obj){
    let pl=document.createElement("div");
    pl.className="pl";
    for(let i=0;i<7;i++)
    {
        let div1=document.createElement("div");
        let img1=document.createElement("img");
        switch(i){
            case 0:
                div1.className="sc";
                let inp=document.createElement("input");
                inp.type="range";
                inp.min="0";
                inp.max="1000";
                inp.value="0"
                inp.className="s";
                inp.id="mr";
                sl=inp;
                sl.oninput = function(){
                    let op = song.duration/1000;
                    ou = this.value;
                    song.currentTime = ou*op;
                }
                div1.appendChild(inp);
                break;
            case 1:
                img1.className="oh";
                img1.onclick=function(){lik()}
                img1.src=obj['blove'];
                div1.appendChild(img1);
                break;
            case 2:
                div1.className="iih";
                img1.className="ih";
                img1.src=obj['love'];
                img1.onclick=function(){lik()}
                li=div1;
                div1.appendChild(img1);
                break;
            case 3:
                img1.className="bac";
                img1.onclick=function(){back()}
                img1.src=obj['back'];
                div1.appendChild(img1);
                break;
            case 4:
                img1.className="plimg";
                img1.onclick=function(){plpa()}
                img1.src=obj['play'];
                im=img1;
                div1.appendChild(img1);
                break;
            case 5:
                img1.className="nex";
                img1.onclick=function(){next()}
                img1.src=obj['next'];
                div1.appendChild(img1);
                break;
            case 6:
                img1.className="sou";
                img1.onclick=function(){vol()}
                img1.src=obj['nvolume'];
                div1.appendChild(img1);
                break;
            default:
                break;
        }
        pl.appendChild(div1);
        cover.appendChild(pl);
    }
}