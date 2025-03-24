// function sayMyName(){
//     console.log("i")
//     console.log("s")
//     console.log("h")
//     console.log("a")
// }

// sayMyName();
// function addTwoNumbers(number1 ,number2){ //parameters
//     return number1 + number2
// }

// console.log(addTwoNumbers(3,4)) //arguments
// console.log(addTwoNumbers(3,"a"))

// const result = addTwoNumbers(3,8)
// console.log("Result:" , result)


function loginUserMessage(userName = "Sam"){ //deafult value
    if(userName){
    return `${userName} just logged In`
    }
}

console.log(loginUserMessage("Isha "))