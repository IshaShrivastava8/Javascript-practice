const mySym = Symbol("myKey123")



// Literal Objects
const obj1 ={
    name : "Isha",
    age : 23,
    [mySym] : "myKey123"
}

console.log( obj1[mySym])
console.log(typeof mySym)

obj1.age = 56
Object.freeze(obj1) 

const newObj = new Object() 
// Nested Object example
const obj2 = {
    name : "Isha",
    age : 23,
    address : {
        city : "Jabalpur",
        state : "Madhya Pradesh",
    }
}


// destructuring of objects
console.log(obj2["name"]);
console.log(obj2.address.city)

obj2.greeting = function(){
    console.log(`Hello user ${this.name}`)
}

console.log(obj2.greeting)// returns function
obj2.greeting();


// Constructor Objects
const obj3  = new Object();
obj3.name = "Ishan"
obj3.age = 26
obj3.id = "123@abc"

console.log(obj3)

// Merging Objects

const obja = {
1:'a',
2:"b"
}
const objb = {
    3:'a',
    4:"b"
    }
const objc = {
5:'a',
6:"b"
}
const objd = {
    7:'a',
    8:"b"
    }
    
const mergedObjectAssign = Object.assign({},obja,objb,objc,objd)
const mergedObjectSpread = {...obja,...objb,...objc,...objd}

console.log(mergedObjectAssign);
console.log(mergedObjectSpread);

const mergedObjectSpread2 = {...obja,...objb,objc,objd}
console.log(mergedObjectSpread2);

console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))

// Destructuring of objects in javascript
const {name} = obj1;
console.log(name);