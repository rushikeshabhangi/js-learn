// object literals 
const symb = Symbol("B1")
const jsUser = {
    "full name": "Rushi Abhngi",
    [symb]: "B2", // use symbol
    email: "rushi@gmail.com",
    mobile: 9876543210,
    city: "Rajkot"
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[symb]);


// Object.freeze(jsUser) // Fix content did not change after freeze
jsUser.email = "ravi@gmail.com"
console.log(jsUser);

jsUser.greet = function(){
    console.log("Hello team");
}
console.log(jsUser.greet());

jsUser.greetTwo = function(){
    console.log(`Hello team your email is ${this.email}`);
}
console.log(jsUser.greetTwo());
