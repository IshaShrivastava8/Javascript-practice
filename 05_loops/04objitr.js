const myObj ={
    js : 'javscript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

//for of was not working

// for (const key in myObj) {
//    console.log(myObj[key] +"    " +key)
// }


// const myArr = ["javscript ","c++","ruby"]

// for(const key in myArr){
//     console.log(key + "   " + myArr[key]);  
// }

//for in cant be used in map

const map = new Map()
map.set("IN","India")
map.set("USA","United States")
map.set("FR","France")

for (const key in map) {
    console.log(key);
    
}