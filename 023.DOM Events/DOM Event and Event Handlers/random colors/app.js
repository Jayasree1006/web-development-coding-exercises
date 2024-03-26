let grate=document.querySelector("#doctor");
grate.addEventListener('click',function() {
    //console.log("done");
    //ocument.body.style.backgroundColor = "olive";
    let r =Math.floor(Math.random()*255);
    let g =Math.floor(Math.random()*255);
    let b =Math.floor(Math.random()*255);
    const grateful=`rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = grateful;
})