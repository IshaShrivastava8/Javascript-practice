// // Object Literal
// const user ={
//     userName:'Isha',
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//         // console.log("Got user details!")
//         // console.log(`User name: ${this.userName}`)
//         console.log(this)
//     }
// }

// const user5 ={
//     userName:'Isha',
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//         // console.log("Got user details!")
//         // console.log(`User name: ${this.userName}`)
//         console.log(this)
//     }
// }



// // console.log(user.userName)
// // user.getUserDetails()

// console.log(this)



// //Constructor function

// const newPromise = new Promise(function(resolve,reject){

// })

// const date = new Date()
//This new keyword is a constructor function which allows us to make an instance of object from single object literal

// New keyword gives us a new context each time

function User(userName,loginCount,isLoggedIn){
this.userName = userName;
this.loginCount = loginCount;
this.isLoggedIn = isLoggedIn

this.greeting = function(){
    console.log(`Welcome ${this.userName}`)
}

// return this;
}

const user1 = new User('Isha',46,true)
const user2 =   User('Amal',73,false)
// console.log(user1.constructor)
console.log(user2 instanceof User)
// console.log(user2)
// user1.greeting()

// new ==> 1. New object gets created
//         2. Constructor function gets called because of new
//         3. This keyword arguments gets injected in it 
//         4. We get a new instance of object
