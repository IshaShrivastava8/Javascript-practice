const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor)

// console.log(Math.PI)

const chai = {
    name: 'gingerChai',
    price : 250,
    isAvailable : true,
    orderChai : function(){
        console.log('Chai nahi bani')
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai,"price"))

Object.defineProperty(chai,'name',{
    enumerable: false // name will not be enumerated
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))
 for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
 }