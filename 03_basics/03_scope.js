// var c = 300
// let a  = 63
// if(true){
//     let a = 10
//     const b = 20
//      c = 30 //functional scoped
//      console.log("Inner:" ,a)

// }

// console.log(a)
// // console.log(b)
// // console.log(c)

function one(){
    const username = "Isha"
 
    function two(){
        const website = "Youtube"
        console.log(website)
        console.log(username)
    }
    // console.log(website)
    two();
}
// console.log(username)
one();



if(true){
    username = 'Isha'
    if(username === 'Isha'){
        const website = " youtube"
        console.log(username+website )
    }
// console.log(website)
}
// console.log(username)

console.log(addOne(5))
function addOne(num){
    return num+1
}

//console.log(addTwo(5)) // This cannot be done here beacuse that one is a func this one is an expression
//This is called hoisting
const addTwo = function(num){
    return num+2
}


const addThree = function(num){
    console.log(num+3)
}
addThree(6)