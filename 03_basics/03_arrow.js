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

const arrowFnuctionb = (num1, num2) => num1 + num2
console.log(arrowFnuctionc(5, 8));

const arrowFnuctionb = (num1, num2) => ( num1 + num2 )
console.log(arrowFnuctionb(5, 8));


