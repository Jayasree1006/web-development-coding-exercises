//Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.
/*
Define a function named lastElement that acept one array parameter, you can call it arr.
To test if the array is empty or not, you can use the array's .length property.
If the array's length is equal to 0, it means it's empty and you can return null. Otherwise, if the array's length is higher than 0 that means there is a last element that we should return.
Since array index numbers start at 0, the last element in the array will always be the array's length minus 1. Therefore, use that to find the index number of the last element in the array.*/
function lastElement(arr) {
    if (arr.length === 0) {
      return null;
    } else {
      return arr[arr.length - 1];
    }
  }