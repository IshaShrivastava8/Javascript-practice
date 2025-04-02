// // Promise is a object reprsenting eventual completion
// //It reduces call back hell
// const promise1 =  new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls,cryptography,network calls
    
//     setTimeout(function(){
//         console.log('async task is complete')
//         resolve()
//     },1000)
// })


// promise1.then(function(){
//     console.log('Promise consumed')
// })



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//       console.log('Promise 2')
//       resolve()
//     },1000)
// }).then(function(){
//     console.log('Promise 2 resolved!')
// })

// const Promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({
//             userName:'Isha',
//             email :"isha@gmail.com"
//         })
//     },1000)
// })

// Promise3.then(function(user){
//     console.log(user)
// })

// const Promise4 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({
//                 userName:'Isha',
//                 password:123
//             })
//         }else{
//             reject('Error Found!')
//         }
//     },1000)
// })

// const userName = 
//  Promise4.then(
//     (user)=>{
//         console.log(user);
//         return user.userName
//     }
//     ).then((userName)=>{
//         console.log(userName)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=> console.log('Finally the Promise is either resolved or rejected'))


// const Promise5 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({
//                 userName:'Javscript',
//                 password:123
//             })
//         }else{
//             reject('Js went wrong!')
//         }
//     },1000)
// });

// async function consumePromise5(){
//     try {
//         const response = await Promise5
//         console.log('Promise')
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromise5();
    

// async function getAllUsers(){
//   try {
//     const response = await fetch('https://api.github.com/users/IshaShrivastava8')
//     // console.log(response)
//     const data = await response.json()
//      console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }



// getAllUsers()


fetch('https://api.github.com/users/IshaShrivastava8')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>console.log(error))