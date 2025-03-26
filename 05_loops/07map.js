const myNums = [10,20,30,40,50]

// const newNums = myNums.map((num)=> num+10)

//chaining
const newNums = myNums
                .map((num)=>num*10)
                .map((num)=>num/10)
                .filter((num)=>num%50==0)

console.log(newNums);
