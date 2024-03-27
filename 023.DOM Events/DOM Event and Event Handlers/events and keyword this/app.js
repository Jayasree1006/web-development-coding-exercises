/*let grate=document.querySelector("button");
grate.addEventListener('click',function() {
    })*/
 const makeRandom = ()=>{
    let r =Math.floor(Math.random()*255);
    let g =Math.floor(Math.random()*255);
    let b =Math.floor(Math.random()*255);
    return`rgb(${r},${g},${b})`;
 }   

let buttons = document.querySelectorAll('button');
for(let button of buttons){
    button.addEventListener('click',function() {
        console.log(this);
        this.style.backgroundColor = makeRandom()
        this.style.color = makeRandom()
       /// button.style.backgroundColor = makeRandom()
       // button.style.color = makeRandom()
     })
}
let words = document.querySelectorAll('h1');
for(let h1 of words){
    h1.addEventListener('click',customize) 
        console.log("you clicked");
        //h1.style.backgroundColor = makeRandom()
       // h1.style.color = makeRandom()
     
}
function customize()
{
    this.style.backgroundColor = makeRandom()
    this.style.color = makeRandom()
}