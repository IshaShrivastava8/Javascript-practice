// const user ={
//     username  : "Isha",
//     age : 23,

//     welcomeMessage : function(){
//         console.log(`${this.username} ,welcome to website`);
//         console.log(this)
//     }
// }

// user.welcomeMessage();
// user.username = "Archana";
// user.welcomeMessage();
// console.log(this)

const chai =function (){
    let username = "Isha"
    console.log(this.username);
}

chai();

const code = () => {
    let username = "Isha"
    console.log(this.username);
}

code();


// Arrow Functions

const arrowFunc = () => {
    console.log("Arrow func")
}
const addTwoNumbers= (num1,num2) => {
   return num1+num2
}

const addTwo = (num) => (num+2)

const addThee = () => ({username:Isha})