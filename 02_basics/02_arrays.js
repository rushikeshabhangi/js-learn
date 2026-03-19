const herosA = ["thor", "ironman", "spiderman"]
const herosB = ["superman", "flash", "batman"]


// herosA.push(herosB) // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(herosA); 

// const herosAB = herosA.concat(herosB) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(herosAB);

const herosABnew = [...herosA, ...herosB] // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(herosABnew);

const innerArrays = [1,2,3,4,5,[6,7,8,9], 10,11,12,[13,14,15,[16,17,18]]]
const innerFlatArrays = innerArrays.flat(Infinity)
//console.log(innerFlatArrays);

const myName = "Rushikesh"
Array.isArray(myName)
// console.log(Array.isArray(myName)); // false
// console.log(Array.from(myName)); // convert to arrays [ 'R', 'u', 's', 'h', 'i', 'k', 'e', 's', 'h' ]
// console.log(Array.from({name: "Rushi"})); // [] "IMP Point"

const score1 = 100
const score2 = 200
const score3 = 300

//console.log(Array.of(score1, score2, score3));
const allScore = [score1 , score2 , score3]
console.log(allScore);
console.log(Object.values(allScore));




