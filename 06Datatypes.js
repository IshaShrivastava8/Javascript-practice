// Datatpes can only be of two types primitive and non primitive depending on how they are accessed through

/*Primitive: Call by value-Changes made to them are made to the copy of them.
String,Number,Boolean,null,undefined,Symbol,BigInt

#Reference(Non primitive):Dirctly there refrence can b allocated in the memory.
Array,Objects,functions

Objects and web events are the most imp concepts of js.*/

// let user;
// console.log(user);
// const  id1 = Symbol('123')
// const id2 = Symbol('123')
// console.log(id1)
// console.log(id2)

// //give variable names which makes sense

// const heros = ["doga","shaktiman","naagraj"]
// //objects
// let myObj= {
//     name:"isha",
//     age:22, 
// }

// const myFunction=function(){
//     console.log("Hello World");
// }

// console.log(typeof heros)
// console.log(typeof id1)


// Stack(Primitive)
// Heap(Non-Primitive)
// let name1 = "Isha"
// let name2 = name1
// name2 = "Asha"

// console.log(name1)
// console.log(name2)

// let userOne = {
//    game :"Isha"
// }

// let usertwo = userOne
// usertwo.game = "tsha"
                                                 
// console.log(userOne.game)
// console.log(usertwo.game) 
const gameName = new String("google-doodle-isha-tree");// This way it stores key Value pairs

// console.log(gameName[5]);
// console.log(gameName.length)
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("l"))
// const newString = gameName.substring(0,4)//Last value doesn't get included
// console.log(newString)
// console.log(String(gameName))
const newString2= gameName.slice(-12,-4)
console.log(newString2)


const string2 = "     Isha   "
console.log(string2)
console.log(string2.trim())

const url = "https://isha.com/%20shruvastava"
console.log(url.replace("%20","Svcjsv"));
console.log(url.includes('sundar'))

console.log(gameName.split("-"))

const name = "isha"
const age =22

console.log(`Hwloo my name is ${name} and my age is ${age}`)

