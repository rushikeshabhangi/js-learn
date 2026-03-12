// Primitive Data Types
    // 7 Types: String, Number, Boolean, null, undefined, symbol, BigInt
    
const stringType = "Rushikesh"
const numberType = 1234567890
const booleanType = false
const nullType = null
let undefinedType
const symboleId = Symbol('456')
const symboleIdSame = Symbol('456')
const bigIntType = 123456789321654987n

console.log(typeof stringType)
console.log(typeof numberType)
console.log(typeof booleanType)
console.log(typeof nullType)
console.log(typeof undefinedType)

console.log(symboleId === symboleIdSame)
console.log(typeof bigIntType)




// Non Primitive Data Types
    // 3 Types: Array, Objects, Functions

const arrayType = ["First Name", "Middle Name", "Last Name"];
const objectsType = {
    name: "Rushikesh",
    age: 30,
    city: "Rajkot",
}

const functionType = function(){
    console.log("Hello")
}

console.log(functionType)



// ======================= Memory ======================= // 

// stack (Primitive), Heap (Non-Primitive)

let myName = "RushiPatel"
let myanotherName = myName
myanotherName = "RaviPatel"
console.log(myName);
console.log(myanotherName);

let userOne = {
    Name: "Google",
    Age: 30,
    City: "USA",
    Email: "google@google.com"
}
let userTwo = userOne
console.log(userTwo);

userTwo.Email = "gmail@google.com"
console.log(userOne);
console.log(userTwo);

