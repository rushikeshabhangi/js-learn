// array

const myArray = [1,2,3,4,5,6]
const myArrayT2 = new Array(1,2,3,4,5)
// console.log(myArray[2]);
// console.log(myArrayT2[2]);

// array methods

// myArray.push(7) // add to last
// myArray.push(8) // add to last
// myArray.push(9) // add to last
//myArray.pop() // Remove array from last
//myArray.shift() // Remove array from First
//myArray.unshift(200) // Add array to first 


// console.log(myArray.includes(2)); // true false 
// console.log(myArray.indexOf(3)); // find position


//const newmyArray = myArray.join() // change array to string

// console.log(myArray);
// console.log(newmyArray); 


// Slice, Splice
const myArrayB = [1,2,3,4,5,6]
console.log("A ", myArrayB);

const newarr = myArrayB.slice(1, 5)
console.log("B ", newarr);

const newarr2 = myArrayB.splice(1, 5)
console.log("C ", myArrayB);
console.log(newarr2);


