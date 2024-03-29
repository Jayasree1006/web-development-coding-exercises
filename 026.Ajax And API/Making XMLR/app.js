const req=new XMLHttpRequest();

req.onload =function (){
console.log("loaded");
const data=JSON.parse(this.responseText)
console.log(data.name,data.height);
}
req.onerrror = function ()
{
console.log("error");
}
req.open('GET','https://swapi.dev/api/people/1/')
req.send()