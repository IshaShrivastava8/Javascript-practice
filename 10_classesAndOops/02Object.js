function mutliplyByFive(num){
    // this.num = num
    return num*5
}

mutliplyByFive.power = 2

console.log(mutliplyByFive(2))
console.log(mutliplyByFive.power)
console.log(mutliplyByFive.prototype) //(this.num = num) these references get stored here

//Everything in js is a object even function 
function createdUser(userName,score){
    this.userName = userName;
    this.score = score;
}

function createUser(userName,score){
    this.userName = userName
    this.score = score
}

createUser.prototype.increement = function(){
    this.score++;
}
createUser.prototype.PrintMe = function(){
    console.log(`My name is ${this.userName}`)
}

const chai = new createUser('chai',25)
const arsh = new createUser('arsh',65)

chai.increement()
chai.PrintMe()
console.log(chai.score)


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/