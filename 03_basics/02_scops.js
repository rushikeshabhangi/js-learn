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
        //console.log(other);
    }

    //console.log(web);

    two()
}
one()

if (true){
    const user = "Rushikesh"
    if (user === "Rushikesh"){
        const web = " Google"
        //console.log(user + web);
    }
    //console.log(web);
    
}

//console.log(user);


// ================ Intresting ==================== //

