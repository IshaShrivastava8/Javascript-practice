const arr = [0,1,2,3,4,5] //arrays in js are resizeable
// console.log(arr) 

// console.log(arr[2])
// let str = new String
// console.log(arr.join(str))
// console.log(arr.slice(0,3)) //index 3 not included
// // arr.copy makes shallow copy(same ref as original)

// arr.push(8)//adds 8 at back
// console.log(arr)
// arr.pop()//removes last element
// console.log(arr)
// arr.unshift(9)// adds 9 infront // could be used for todo list
// console.log(arr)
// console.log(arr)
// arr.shift()// removes first element from the front
// console.log(arr)

// console.log(arr.includes(9))
// console.log(arr.indexOf(9))

// const newArr = arr.join()
// console.log(newArr);
//  console.log(typeof newArr);

 //Slice and splice

  console.log("A",arr)
  console.log(arr.slice(1,3))// second index excluded
  console.log("B",arr)// arr still remains same after slice
  console.log(arr.splice(1,3))//second index included
  console.log("C",arr)// But changes after splice