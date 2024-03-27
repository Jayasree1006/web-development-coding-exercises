let buttons = document.querySelector('button');
buttons.addEventListener('click',function(){
    alert("you clicked")
})
let word = document.querySelector('input');
word.addEventListener('keydown',function(e){
    console.log(e.key);
    console.log(e.code)
})
/*window.addEventListener('keydown',function(e){
    console.log(e.code)
})*/
window.addEventListener('keydown',function(e){
    switch(e.code)
    {
        case'ArrowUp':
        console.log("up!");
        break;
        case'ArrowDown':
        console.log("Down!");
        break;
        case'ArrowLeft':
        console.log("Left!");
        break;
        case'ArrowRight':
        console.log("Right!");
        break;
        default:
        console.log("done")
    }
})
