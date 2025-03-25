(function chai(){
    //named iife
    console.log(`Db connected`)
})(); //semicolon here it is imp
// Immediately Invoked s that the variables dont get plluted by global scope

((name) =>{
    console.log(`Db connected ${name}`)
})("Isha")