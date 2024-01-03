let images=["1.jpg","2.jpg","3.jpg","4.png"];
let smimg=["11.jpg","22.jpg","33.png","44.png"];
let call=[0,1,2,3];
let icons=[".q",".w",".e",".r",".t",".y",".u",".i",".o",".p"];
let cvr=[];
let call2=[0,1,2,3,4,5,6,7,8,9];
let nam=[];

let bgon=document.querySelector(".on");
let car=document.querySelector(".smblk");
let abt=document.getElementById("about");
let playbtn=document.querySelectorAll(".playbtn");
let logo=document.querySelector(".logo");
let pimg=document.querySelector(".pimg");
let ppimg=document.querySelectorAll(".ppimg");
let bb=document.querySelectorAll(".bb");
let avatar=document.querySelector(".Avatar");

async function load(){
    let request = new Request("data.json");
    let response = await fetch(request);
    let obj = await response.json();
    ldmd(obj);
    ldat();
    cons(obj);
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
function cons(obj){
  bgon.style.backgroundImage="url("+obj['bgon']+")";
  car.style.backgroundImage="url("+obj['bgon']+")";
  //abt.style.backgroundImage="url("+obj['bgabt']+")";
  for(let i=0;i<playbtn.length;i++){
    playbtn[i].src=obj['icplay'];
  }
  logo.src=obj['main'];
  pimg.src=obj['share'];
  ppimg[0].src=obj['instagram'];
  ppimg[1].src=obj['twitter'];
  ppimg[2].src=obj['facebook'];
  for(let i=0;i<bb.length;i++){
    bb[i].src=obj['bubble'];
  }
  //avatar.src=obj['devimg'];
  console.log("called");
}

let carousel = document.querySelector(".on");
let pan=document.querySelector(".wpanel");
let panbtn=document.querySelector(".panel");
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
  if(index-1<0){
    return;
  }
  localStorage.setItem("music",call[index-1]);
  window.open("./musicPlayer.html","_self");
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
  window.open("./musicPlayer.html","_self");
}
//search
let q=document.querySelector(".lrp");
let w="";
q.onkeyup=(e)=>{
console.log(e.target.value);
w=e.target.value;
search(w);
}
function search() {
    let input = w;
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
let intro=document.querySelector(".intro");
setInterval(dis,3000);
function dis(){
  intro.style.display="none";
}