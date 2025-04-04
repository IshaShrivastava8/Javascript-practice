//ES6 

// class user{
//     constructor(username,email,password){
//     this.username =  username;
//     this.email = email;
//     this.password = password;
//     console.log('Constructor called')
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     captializeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// } 


// const user1 = new user('isha',"abc@123",123)
// console.log(user1.encryptPassword())
// console.log(user1.captializeUsername())


function User(username,email,password){
    this.username =  username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.captializeUsername = function(){
     return `${this.username.toUpperCase()}`
}

const user2 = new User('Sam','sam@321','vcd')

console.log(user2.captializeUsername())
console.log(user2.encryptPassword())
