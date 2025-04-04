function setUserName(userName){
    //Complex Db calculations
    this.userName = userName
    console.log('called')
}


function createUser(userName,email,password){
    // setUserName.call(userName)  This won't set the name as its Execution context will go away with that func including variables
    setUserName.call(this,userName) //This will set it
    this.email = email
    this.password = password
}

const chai = new createUser('chai','chai@facebook.com',123)
console.log(chai)