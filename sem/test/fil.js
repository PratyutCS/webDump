let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

console.log("javascript is rad");
var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}
var modal1 = document.getElementById('login-form');
var modal = document.getElementById('home');
window.onclick = function(event) 
{
  if (event.target == modal)
    {
        modal1.style.display = "none";
    }
}

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();

function lol()
{
  document.getElementById('login-form').style.display='block';
}

function check()
{
  let username=document.getElementById('lgt').value;
  let password =document.getElementById('lgp').value;
  if(username=="admin" && password=="admin")
  {
    window.open("./pg2.html",);
  }
  else
  {
    alert("failed");
  }
}