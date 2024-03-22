let arr = [1,2,3,-1]; // spread with function calls.
let arr3 =["hello"];
console.log(arr3);
console.log(Math.min(...arr));
arr.push('d');
console.log(arr);
 console.log(..."hello");
/*
unction myFunction(x, y, z) {
const args = [0, 1, 2];
}
let result = myFunction(...args);
console.log(result);
*/
let arr1 = [1, 2, 3];//spread with array
let arr2 = [4, 5];
arr = [...arr1, ...arr2,'sprad'];
console.log(...arr); 
//spread with object literals
const user1 = {
    name: 'Jen',
    age: 22,
};
 
const user2 = {
    name: "Andrew",
    location: "Philadelphia"
};
 const mergedUsers = { ...user1, ...user2 , color:"black"};
console.log(mergedUsers);
//destructing arrays
const scores =[123,345,56,78,90];
const first=scores[0];
const second = scores[1];
const[gold, silver,bronze,...everyoneelse] = scores;
console.log(gold);
console.log(first);
console.log(everyoneelse);//returns the balance array element
//destructing objects;
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
   const{age,eyecolor} = person;
   console.log(age);
   console.log(person);
