const myUsers = {}

myUsers.id = "a1"
myUsers.name = "Ravi"
myUsers.email = "ravi@gmail.com"
myUsers.phone = 9876543210

//console.log(myUsers);


const newUser = {
    fullname: {
        name: {
            firstname: "Rushi",
            lastname: "Patel",
        }
    },
    email: "test@email.com",
}
//console.log(newUser.fullname.name.firstname);

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = {
    4: "d",
    5: "e",
    6: "F"
}
const fletnewUser = Object.assign({}, obj1, obj2 )
// console.log(fletnewUser);
const fletnewUser2 = {...obj1, ...obj2} 
// console.log(fletnewUser2);



const teamList = [
    {
        laravel: "Ankit",
        wp: "Subham",
        react: "Parth",
        unity: "Vishal"
    },
    {
        desing: "Ravi",
        wpdesing: "Rushi"
    },
    {
        admin: "Disha",
        code: "Ajay"
    }
]

//teamList[1].laravel
// console.log(teamList); 
console.log(Object.keys(myUsers)); // [ 'id', 'name', 'email', 'phone' ]
console.log(Object.values(myUsers)); // [ 'a1', 'Ravi', 'ravi@gmail.com', 9876543210 ]
console.log(Object.entries(myUsers));
// [
//   [ 'id', 'a1' ],
//   [ 'name', 'Ravi' ],
//   [ 'email', 'ravi@gmail.com' ],
//   [ 'phone', 9876543210 ]
// ] 


console.log(myUsers.hasOwnProperty('name')); // true





