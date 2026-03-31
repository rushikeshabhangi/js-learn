// Immediately Invoked Function Expressinons (IIFE)

(function chai(){
    // named IIIFE
    console.log(`You are loggedin`);
})();

(()=>{
    console.log(`You are loggedin two`);
})();

((name)=>{
    console.log(`${name} is loggedin`);
})("Rushi");
