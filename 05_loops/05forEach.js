const myArr = ["javscript ","c++","ruby","python","java"]

// myArr.forEach(function (item){
// console.log(item);

// })
//callbacks dont have a name
//Since the func is running inside an array it automatically gets parameter from it

// myArr.forEach((item)=> {
//     console.log("Item is :" + item);
// })

// function printMe(item){
// console.log(item);
// }

// myArr.forEach(printMe)


myArr.forEach(function (item,index,arr){
console.log(item,index,arr);

})

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : 'js'
    },
    {
        languageName : "C++",
        languageFileName : 'cpp'
    },
    {
        languageName : "Python",
        languageFileName : 'py'
    }
]

// myCoding.forEach((item)=>{
// console.log(item.languageFileName)
// })

// myArr.forEach((item)=>{
//     console.log(item);
// })