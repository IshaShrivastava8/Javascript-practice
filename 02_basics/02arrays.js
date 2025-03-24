const marvel_heros = ["thor","siderman","Ironman"]
const dc_heros = ["superman","flash","batman"]
marvel_heros.push(dc_heros)//push pushes the array in the same array
console.log

console.log(dc_heros.concat(marvel_heros))//concat returns new arr
const new2= [...dc_heros,...marvel_heros]//spread
console.log(new2)


// flat method for nested arrays
const arr1 = [1,2,3,[4,[5,6]]]
console.log(arr1);
// arr1.flat(3);
// console.log(arr1);
// The .flat(depth) method in JavaScript does not modify the original array; instead, it returns a new flattened array. Your code does not store or use the returned value.


const new_arr1 = arr1.flat(3);
console.log(new_arr1)