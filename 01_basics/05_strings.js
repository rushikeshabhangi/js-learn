let name = "Rushi"
let count = 50
console.log(name[1]); // u
console.log(name.length); // 5

console.log(name + count);
console.log(`Hello my name is ${name} and my count is ${count}`);

const testDemo = new String('Hello Demo');
console.log(testDemo.length); // 10
console.log(testDemo[1]); // e
console.log(testDemo.toUpperCase()); // e
console.log(testDemo.charAt(6)); // D
console.log(testDemo.indexOf('e')); // D

const substring = testDemo.substring(0, 4)
console.log(substring);

const fullName = "Rushikesh"
const slice = fullName.slice(-7, 4)
console.log(slice);

const trim = "     Rushi    Abhangi"
console.log(trim);
console.log(`${trim.length}`);
console.log(trim.trim());


const url = "https://google.com/"
console.log(url.replace("google", "facebook"));
console.log(url.includes("com"));

console.log(url.split('o'));

let hindi = 80;
let english = 80;

if (hindi < english) {
    console.log(`${hindi} is less than ${english}`);
} else if (hindi > english){
    console.log(`${hindi} is greater than ${english}`);
} else{
    console.log(`${hindi} is equal to ${english}`);
}