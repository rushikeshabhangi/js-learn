// const user = {
//     username: "Rushikesh",
//     price: 999,
//     welcomemsg: function(){
//         console.log(`${this.username}, welcome to website`);
//         //console.log(this);
        
//     }
// }
// user.welcomemsg()
// user.username = "Dj"
// user.welcomemsg()

// console.log(this);

function coffeeb(){
    let username = "Dev"
    console.log(this.username); // undefined
    
    // console.log(this);   
}
coffeeb()

const coffee = function(){
    let username = "Ravi"
    console.log(username);
}
coffee()


const coffeea = ()=>{
    let username = "Rushi"
    console.log(username);
}
coffeea()

const arrowFnuction = (num1, num2) =>{
    return num1 + num2
}
console.log(arrowFnuction(5, 8));

const arrowFnuctionA = (num1, num2) => num1 + num2
console.log(arrowFnuctionA(5, 8));

const arrowFnuctionB = (num1, num2) => ( num1 + num2 )
console.log(arrowFnuctionB(5, 8));

const arrowFnuctionC = (num1, num2) => ({username: "Rushikesh"})
console.log(arrowFnuctionC(5, 5));




const userName1 = {
    fname: "Ankit",
    post: "Developer",
    welcomemsg: function(){
        console.log(`${this.fname}, welcome to the website.`);
        console.log(this);
    }
}
// userName1.welcomemsg();
// userName1.fname = "Mayur";
// userName1.welcomemsg();
// console.log(this);

// function one(){
//     let name = "Sagar"
//     console.log(name)
// }
// one() // Sagar

// const usename = function (){
//     let nameis = "Rushi"
//     console.log(this.nameis)
// }
// usename() // undefined

// const usename = function (){
//     let nameis = "Rushi"
//     console.log(this)
// }
// usename()

const usename = () =>{
    let nameis = "Rushi"
    console.log(nameis)
}
usename() 


const arrow1 = (one, two) => {  // Mathod 2
    return one + two
}
console.log(arrow1(3, 4)) // 7

const arrow2 = (one, two) => one + two // Mathod 2
console.log(arrow2(3, 4)) // 7 

const arrow3 = (one, two) => ( one + two ) // Mathod 3
console.log(arrow3(3, 4)) // 7 

const arrow4 = (one, two) => ( {fname: "Yash"} ) // Mathod 3
console.log(arrow4(3, 4)) // { fname: 'Yash' }

const arrow5 = () => ({
    lname: "Roase"
})
console.log(arrow5())