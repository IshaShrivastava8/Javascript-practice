(function chai(){
    //named iife
    console.log(`Db connected`)
})(); //semicolon here it is imp
// Immediately Invoked so that the variables dont get polluted by global scope

((name) =>{
    console.log(`Db connected ${name}`)
})("Isha")