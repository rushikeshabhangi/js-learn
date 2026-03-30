// var c = 300
let a = 300
// {} Scope
if (true) {
    let a = 10
    const b = 20
    var c = 30
    //console.log("Inner: ", a);
    
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const other = "Rushi"

    function two(){
        const web = "youtube"
        //console.log(other); // Rushi
    }

    // console.log(web); // can't access 

    two()
}
one()

if (true){
    const user = "Rushikesh"
    if (user === "Rushikesh"){
        const web = " Google"
        //console.log(user + web); // Rushikesh Google
    }
    //console.log(web); // can't access 
    
}

//console.log(user); // can't access 


// ==================== Intresting ==================== //

console.log(addOne(5)); // 6
function addOne(num){
    return num + 1
}


//console.log(myNum(5)); // Cannot access 'myNum' before initialization
const myNum = function(num){
    return num + 2
}

 

