// const arr= [1,2,3,4,5]

// for(const val of arr){
//     console.log(val);  
// }

//name is a keyword here so it shoes dpricated
// const userName = "Isha Shrivastava"

// for( const val of userName){
//     console.log(val)
// }

const map = new Map()
map.set("IN","India")
map.set("USA","United States")
map.set("FR","France")

console.log(map);

for (const[ key,value] of map) {
    console.log(key +':--'+value);
}

// const myObj ={
//     game1 : "nfs",
//     game2 : "roadrash"
// }

// for (const [key,value] of myObj) {
//     console.log(key +":"+value);
    
// }

//So maps are iterable like this objects aare not

