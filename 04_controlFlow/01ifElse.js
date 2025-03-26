// if(true){
//     //code here runs
// }

// if(false){
//     // code here doesnt run
// }

// const userLoggedIn = true
// const temp = 81
// if(2=='2'){
// console.log("executed");

// }
// if(temp<50){
//     console.log('Less than 50');
    
// }else{
// console.log("Temp is greater than 50");
// }

// // Comparison Operators
// //<,>,<=,>=,==,===,!=,


const score = 200
if(score>100){
  const power = "fly" 
  console.log(`User's power : ${power}`);
   
}

const balance = 1000
// if(balance>500) console.log("test"), console.log("test2"); bad practice

if(balance<500){
console.log("Less than");

}else if(balance<750){
    console.log("lEss than 750");
    
}else{
    console.log("less than 1200");
    
}



    const userLoggedIn = true;
    const debitcard = true;
    const loggedInFromGoogle = false
    const loggedInFromEmail = true

if(userLoggedIn && debitcard && 2==3){
    console.log("Allow buying");
    
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("Logged In");
    
}