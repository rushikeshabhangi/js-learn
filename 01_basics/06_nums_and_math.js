const numb = 1000
console.log(numb);

const onlyNumb = new Number(2000)
console.log(onlyNumb);
console.log(onlyNumb.toFixed(2));

const changeType = onlyNumb.toString()
const changeTypeL = onlyNumb.toString().length;
console.log(changeType);
console.log(changeTypeL);

const otherNuber = 120.74
console.log(otherNuber.toPrecision(4));

const numberTwo = 100000000
console.log(numberTwo.toLocaleString());
console.log(numberTwo.toLocaleString('en-in'));

// ===================== Maths ===================== //

console.log(Math);
console.log(Math.abs(-4)); // Negative to Positive
console.log(Math.round(4.49));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(9,5,6,2,8,152,82,8));
console.log(Math.max(9,5,6,2,8,152,82,8));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max - min + 1)) + min);











