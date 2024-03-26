/*const buttons= document.querySelector('#tid');
buttons.onclick=function()
{
    console.log("you clicked me")
}*/

let rat = document.querySelector('#readdy');
rat.addEventListener('mouseup',function() 
{
    alert("you clicked");
})
function shout(){
    console.log("shout")
}
function Twist(){
    console.log("twist")
}
let tasbutton = document.querySelector("#tas");
//tasbutton.onclick= shout;
//tasbutton.onclick=Twist;
tasbutton.addEventListener('click', Twist)
tasbutton.addEventListener('click', shout)