// Dates

const todayDate = Date();
// console.log(todayDate);
// console.log(typeof todayDate);

//const customDate = new Date(2026, 01, 20)
const customDate = new Date(2026, 01, 20)
console.log(customDate.toString());

const customDateTime = new Date(2026, 01, 20, 13, 23)
console.log(customDateTime.toLocaleString());

//const typeTwoDate = new Date("2024-10-1")
const typeTwoDate = new Date("10-30-2024").toLocaleString()
console.log(typeTwoDate.toString());

const liveTime = Date();

console.log(liveTime.toString());