// let myName = 'Isha    '
// console.log(myName.length)

//Trim function
let myName = 'Isha    ';
console.log(myName.trim().length);

let myHeros = ['thor','spiderman']

let heroPower ={
    thor : 'hammer',
    spiderman : 'sling',


    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log('Hitesh is present in all objects')
}

// heroPower.hitesh();
myHeros.hitesh();

Array.prototype.heyIsha = function(){
    console.log('Hey Isha')
}

myHeros.heyIsha();


//////*********Inheritance*********////////////

const user = {
    username : 'Isha',
    login : true
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport ={
    isAvailable:false
}

const TAsupport = {
    makeAssignment : 'Js Assignment',
    fullTime : true,
    __proto__ :TeachingSupport
}

Teacher.__proto__ = user//This is prototypal inheritance => old syntax

//Mordern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)