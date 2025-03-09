let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate)


// month in js starts from 0
// let myCreatedDate2 = new Date(2023,12,23)
// let myCreatedDate1 = new Date(2023,-1,23)
// let myCreatedDate3 = new Date(2023,0,23)
// let4myCreatedDate4 = new Date("2023-01-14")
// let4myCreatedDate5 = new Date("01-14-2023")

// console.log(myCreatedDate1.toString())
// console.log(myCreatedDate2.toString())
// console.log(myCreatedDate3.toString())


//Date and time stamps are req in sitws like hotel booking,quizes,polls etc
//How to do it?

let myTimeStamp = Date.now()
console.log(myTimeStamp.toLocaleString())

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)



