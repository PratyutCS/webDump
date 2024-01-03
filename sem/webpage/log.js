let q=document.querySelector(".srch");
let w="";
q.onkeyup=(e)=>{
console.log(e.target.value);
w=e.target.value;
search_animal(w);
}
function search_animal() {
    let input = w;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}