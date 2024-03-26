function hellos(){
    console.log("hello");
}
function GoodByes(){
    console.log("goodbye");
}
let greet =document.querySelector("#hello");
greet.addEventListener('click',hellos)
let greeting = document.querySelector("#goodbye");
greeting.addEventListener('click',GoodByes)