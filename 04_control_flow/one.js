const isUser = true
if (2 !== 3) {
    console.log("Hello")
}

// <, > , <=, >=, ==, ===, !=
const temprature = 48
if (temprature < 50 ){
    console.log("Temprature less then 50")
} else{
    console.log("Temprature is above 51")
}

const speed = 100
if (speed > 90){
    const down = "it is down speed"
    console.log(`you speed: ${down}`);
}


const balance = 1500
if (balance === 800){
    console.log("Your balance is equal to 800");
} else if(balance < 1000){
    console.log("Your balance is less then 1000");
} else if(balance < 1300){
    console.log("Your balance is less then 1300");
} else{
    console.log("Your balance is less then not match");
}

const car = true
const driver = true
if (car && driver){
    console.log("You can join race.");   
} else{
    console.log("!Sorry you can't join race.");
}

const petrol = true
const diseal = false
if (petrol || diseal ){
    console.log("Your car is passed.");
}