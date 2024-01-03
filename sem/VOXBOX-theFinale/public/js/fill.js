let images=["1.jpg","2.jpg","3.jpg","4.png"];
let smimg=["11.jpg","22.jpg","33.png","44.png"];
let call=[0,1,2,3];
let icons=[".a",".b",".c",".d",".e",".f",".g",".h",".i",".j"];
let cvr=[];
let call2=[0,1,2,3,4,5,6,7,8,9];
let nam=[];

let pan;
let panbtn;

async function load(){
    let request = new Request("data.json");
    let response = await fetch(request);
    let obj = await response.json();
    loadheader(obj);
    loaddiscover(obj);
    loadhome(obj);
    loadsearch(obj);
    //loadabout(obj);
    ldmd(obj);
    ldat();
  }
  load();
function ldmd(obj)
{
    let md = obj['md'];
    for(let mdt of md)
    {
      for(let i=0;i<(mdt.b).length;i++)
        {
            cvr.push((mdt.c)[i]);
            nam.push((mdt.n)[i]);
        }
    }
    sa2(cvr,call2,nam);
}
function sa2(array1,array2,array3) {
  for (let i = array1.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array1[i], array1[j]] = [array1[j], array1[i]];
      [array2[i], array2[j]] = [array2[j], array2[i]];
      [array3[i], array3[j]] = [array3[j], array3[i]];
  }
}
function ldat(){
  for(let i=0;i<cvr.length;i++){
    document.querySelector(icons[i]).style.backgroundImage="url("+cvr[i]+")";
  }
}




//----------free code

let carousel;
let car;

setInterval(function() {startCarousel();}, 3000);

var index = 0;
function sa(array1,array2,array3) {
  for (let i = array1.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array1[i], array1[j]] = [array1[j], array1[i]];
      [array2[i], array2[j]] = [array2[j], array2[i]];
      [array3[i], array3[j]] = [array3[j], array3[i]];
  }
}
sa(images,smimg,call);


startCarousel = () => {
  carousel.style.backgroundImage = `url(${images[index]})`;
  car.style.backgroundImage = `url(${smimg[index++]})`;
  if(index > images.length - 1) index = 0;
}
function adimg(){
  carousel.style.opacity="0.4";
  car.style.display="block";
}
function rmimg(){
  carousel.style.opacity="1";
  car.style.display="none";
}
function ripmimg(){
  carousel.style.opacity="1";
  car.style.display="none";
  loli(0);
}
function rrmimg(){
  carousel.style.opacity="1";
  car.style.display="none";
  loli(1);
  cpanel();
}


function mpopen()
{
  console.log("onclick worked");
  if(index-1<0){
    console.log("index is : "+index);
    return;
  }
  localStorage.setItem("music",call[index-1]);
  window.open("/player","_self");
}


function home(){
  window.open("#home","_self");
}
function panel(){
  pan.style.display="block";
  pan.style.animation="0.5s ltr";
  pan.style.opacity=1;
  pan.style.transform="translateX(0%)";
  panbtn.style.transform="translateX(-100%)";
  panbtn.style.opacity=0;
  panbtn.style.animation="linear 0.4s rtl";
}
function cpanel(){
  pan.style.animation="linear 0.4s rtl";
  pan.style.opacity=0;
  pan.style.transform="translateX(-100%)";
  panbtn.style.transform="translateX(0%)";
  panbtn.style.opacity=1;
  panbtn.style.animation="linear 0.4s ltr";
}
function pdis(){
  panbtn.style.transform="translateX(-100%)";
  panbtn.style.opacity=0;
  panbtn.style.animation="linear 0.4s rtl";
}
function share(i){
  if(i==0){
    window.open("https://www.instagram.com/_pratyut_/");
  }
  else if(i==1){
    window.open("#");
  }
  else if(i==2){
    window.open("#");
  }
}
let vi=2;
function loli(i)
{
  if(vi==i){
    return;
  }
  console.log(i);
  var reveals = document.querySelectorAll(".reveal");
  console.log(reveals[i]);
  reveals[i].classList.add("active");
  console.log(reveals[vi]);
  reveals[vi].classList.remove("active");
  vi=i;
}
function msop(j){
  console.log(call2[j]);
  localStorage.setItem("music",call2[j]);
  window.open("/player","_self");
}

//---------free code




//header

function loadheader(obj){
  let header=document.querySelector(".nnbb");

  ldimg(obj,header);
  ldpdis(header);
  ldnav(header);
  ldp(obj,header);
  ldwp(obj,header);
  ldpp(header);
}

function ldimg(obj,header){
  let img1=document.createElement("img");
  img1.className="logo";
  img1.src=obj['main'];
  img1.onclick=function(){home()}
  img1.onmouseover=function(){pdis();}
  header.appendChild(img1);
}

function ldpdis(header){
  let div1=document.createElement("div");
  div1.className="pdis";
  div1.onmouseover=function(){pdis();}
  header.appendChild(div1);
}

function ldnav(header){
  let nav=document.createElement("nav");
  nav.onmouseover=function(){pdis();}
  for(let i=0;i<3;i++){
    let a1=document.createElement("a");
    a1.onclick=function(){loli(i)}
    if(i==0){
      a1.className="reveal";
      a1.href="#search";
      a1.innerHTML="Search";
    }
    else if(i==1){
      a1.className="reveal";
      a1.href="#about";
      a1.innerHTML="About";
    }
    else if(i==2){
      a1.className="reveal active";
      a1.href="#home";
      a1.innerHTML="Home";
    }
    nav.appendChild(a1);
    header.appendChild(nav);
  }

}

function ldp(obj,header){
  let div=document.createElement("div");
  div.className="panel";
  panbtn=div;
  div.onmouseover=function(){panel()};
  let img=document.createElement("img");
  img.className="pimg";
  img.src=obj['share'];
  div.appendChild(img);
  header.appendChild(div);
}

function ldwp(obj,header){
  let div=document.createElement("div");
  div.className="wpanel";
  pan=div;
  for(let i=0;i<3;i++){
    let img=document.createElement("img");
    let ss=i+1;
    let str="ppimg p"+ss;
    img.className=str;
    img.onclick=function(){share(i)}
    div.appendChild(img);
    if(i==0)
    {
      img.src=obj['instagram'];
    }
    else if(i==1){
      img.src=obj['twitter'];
    }
    else if(i==2){
      img.src=obj['facebook'];
    }
  }
  header.appendChild(div);
}

function ldpp(header){
  let div4=document.createElement("div");
  div4.className="ppanel";
  header.appendChild(div4);
}




//discover



let homei;
let search;

function loaddiscover(obj){
  let discover=document.getElementById("discover");
  let div1=document.createElement("div");
  div1.className="outer-wrapper";
  div1.onmouseover=function(){cpanel()};
  ldwr(div1);
  discover.appendChild(div1);
}

function ldwr(div1){
  let div2=document.createElement("div");
  div2.className="wrapper";

  let div21=document.createElement("div");
  div21.className="slide one";
  div21.id="home";
  div21.onmouseover=function(){loli(2)};
  homei=div21;
  
  let div22=document.createElement("div");
  div22.className="slide two";
  div22.id="search";
  div22.onmouseover=function(){ripmimg()};
  search=div22;

  div2.appendChild(div21);
  div2.appendChild(div22);
  
  div1.appendChild(div2);
}




//home



function loadhome(obj){
  ldon(obj,homei);
  ldsmblk(obj,homei);
}

function ldon(obj,home){
  let div1=document.createElement("div");
  div1.className="on";
  div1.style.backgroundImage="url("+obj['bgon']+")";
  div1.onmouseover=function(){adimg()};
  div1.onclick=function(){mpopen()};
  carousel=div1;
  home.appendChild(div1);
}

function ldsmblk(obj,home){
  let div1=document.createElement("div");
  div1.className="smblk";
  div1.style.backgroundImage="url("+obj['bgon']+")";
  div1.onclick=function(){mpopen()};
  car=div1;
  home.appendChild(div1);
}




//search

function loadsearch(obj){
  ldlgd(search);
  ldico(search,obj);
}

function ldlgd(search)
{
  let div1=document.createElement("div");
  div1.className="lgd";
  let form=document.createElement("form");
  let div2=document.createElement("div");
  div2.className="tf";
  let inp=document.createElement("input");
  inp.type="text";
  inp.placeholder="Song Name";
  inp.className="lrp";
  inp.onkeyup=(e)=>{
    console.log(e.target.value);
    let input = e.target.value;
    input=input.toLowerCase();
      
    for (i = 0; i < nam.length; i++) { 
        if (!nam[i].toLowerCase().includes(input)) {
          document.querySelector(icons[i]).style.display="none";
        }
        else {
          document.querySelector(icons[i]).style.display="flex";                 
        }
    }
  }
  div2.appendChild(inp);
  form.appendChild(div2);
  div1.appendChild(form);
  search.appendChild(div1);
}

function ldico(search,obj)
{
  let div1=document.createElement("div");
  div1.className="ico";
  let div2=document.createElement("div");
  div2.className="cont";
  
  let div5=document.createElement("div");
  div5.className="cont";

  let q=97;

  for(let i=0;i<5;i++,q++){
    let div3=document.createElement("div");
    let ml=String.fromCharCode(q);
    let qq="ic "+ml;
    div3.className=qq;
    div3.onclick=function(){msop(i)};
    let img=document.createElement("img");
    img.className="playbtn";
    img.src=obj['icplay'];
    div3.appendChild(img);
    div2.appendChild(div3);
  }

  for(let i=5;i<10;i++,q++){
    let div6=document.createElement("div");
    let ml=String.fromCharCode(q);
    let qq="ic "+ml;
    div6.className=qq;
    div6.onclick=function(){msop(i)};
    let img=document.createElement("img");
    img.className="playbtn";
    img.src=obj['icplay'];
    div6.appendChild(img);
    div5.appendChild(div6);
  }

  div1.appendChild(div2);
  div1.appendChild(div5);

  search.appendChild(div1);
}


//about

function loadabout(obj){
  let about=document.getElementById("about");

  ldb(about,obj);
  ldc1(about);
  ldc2(about,obj);
  about.style.backgroundImage="url("+obj['bgabt']+")";
}
function ldb(about,obj){
  let b=document.createElement("div");
  b.classList="bubbles";
  for(let i=0;i<7;i++){
    let ib=document.createElement("img");
    ib.classList="bb";
    ib.src=obj['bubble'];
    b.appendChild(ib);
  }
  about.appendChild(b);
}
function ldc1(){
  let c1=document.createElement("div");
  c1.classList="c1";
  let h1=document.createElement("h1");
  h1.className="hg1";
  h1.textContent="ABOUT VOXBOX";
  let p1=document.createElement("p");
  p1.textContent="Listen to your favourite music";
  c1.appendChild(h1);
  c1.appendChild(p1);
  about.appendChild(c1);
}
function ldc2(about,obj){
  let c2=document.createElement("div");
  c2.classList="c2";
  let h1=document.createElement("h1");
  h1.className="hg2";
  h1.textContent="ABOUT DEV";
  let bd=document.createElement("div");
  bd.classList="container";
  let nd=document.createElement("div");
  nd.className="flip-card";
  let md=document.createElement("div");
  md.className="flip-card-inner";
  let div1=document.createElement("div");
  div1.className="flip-card-front";
  let img=document.createElement("img");
  img.className="Avatar";
  img.src=obj['devimg'];
  div1.appendChild(img);
  md.appendChild(div1);
  let div2=document.createElement("div");
  div2.className="flip-card-back";
  let h2=document.createElement("h1");
  h2.className="hh";
  h2.textContent="PRATYUT";
  p2=document.createElement("p");
  p2.textContent="C.S. Engineer";
  div2.appendChild(h2);
  div2.appendChild(p2);
  md.appendChild(div2);
  nd.appendChild(md);
  bd.appendChild(nd);
  c2.appendChild(h1);
  c2.appendChild(bd);
  about.appendChild(c2);
}
let intro=document.querySelector(".intro");
setInterval(dis,3000);
function dis(){
  intro.style.display="none";
}