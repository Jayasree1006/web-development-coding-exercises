const number=[1,2,3,4,5,6]
function print(element){
    console.log(element)
}
print(number[0])
print(0)

//for each method
/*const number=[1,2,3,4,5,6]
function print(element){
    console.log(element)
}
print(number)
number.forEach(print)
//map method
const number=[1,2,3,4,5,6]
const caps = number.map(function(num)
{
    return num*2;
})
console.log(caps)
*
//arrow
//const add = function(x,y)
{
return x+y;}
//

add(2,4)
console.log(add)

const square = x =>{
    return x*x
}
console.log(square)

const number=[1,2,3,4,5,6]
const caps = number.map(function(num)
{
    return num*2;
})
console.log(caps)

const add = function(x,y)
{
return x+y;}
let x = add(2,3);
console.log(x);

const square = x =>{
    return x*x
}
let subject = square(3);
console.log(subject);
console.log(square(4));