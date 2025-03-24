function calculateCartPrice(nums){
    return nums
}

function calculateCartPrice2(...nums){
    return nums
}

console.log(calculateCartPrice(200))
console.log(calculateCartPrice2(200,400,500))


function calculateCartPrice3(val1,val2,...nums){
    return nums
}
console.log(calculateCartPrice3(200,400,500,600))


const user ={
    name : " Isha",
    age : 23
}

function handleObject(anyObject){
 console.log(`Name is ${anyObject.name} and age is ${anyObject.age}`)
}
handleObject(user);


function handleObject2({
    name = "Sumaiya",
    age = 25
}
){
    console.log(`Name is ${name} and age is ${age}`)
   }
   handleObject2({});


const myNewArray = [200,400,5500,600]

function getSecondElement(getArray){
    console.log(getArray[2])
}
// getSecondElement(myNewArray)
getSecondElement([300,8,63,79])