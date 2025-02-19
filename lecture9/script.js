//Reduce:

//sum of array

// const arr=[5,7,3,1,8];

// var sumOfArr=0;

// for(let i=0;i<arr.length;i++){
//     sumOfArr+=arr[i];
// }

// console.log(sumOfArr);

// const ans=arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc
// },0);

//accumalator : maintain state and count
//current:

// const users=[
//     { firstName:"Pratiyush", lastName:"Ray", age:25},
//     { firstName:"Piyush", lastName:"Saini", age:22},
//     { firstName:"Sahil", lastName:"Aggarwal", age:25},
//     { firstName:"Ayush", lastName:"Jawa", age:28},
//     { firstName:"Daksh", lastName:"Singh", age:40},
//     { firstName:"Agamjot", lastName:"Singh", age:26},
//   ];

//   const ans=users.reduce(function(acc,curr){
//     if(curr.age===22){
//         acc++;
//     }
//     return acc;
//   },0)

//   console.log(ans);

//   dataMap=[2,7,4,3,8,5];

//   var maxNumber=0;

//   for(let i=0;i<dataMap.length;i++){
//     if(maxNumber<dataMap[i]){
//         maxNumber=dataMap[i];
//     }
//   }

//   console.log(maxNumber);

//   const ansMax=dataMap.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr;
//     }
//     return acc;
//   },0)

//   console.log(ansMax);

//callback

// reachedRestaured(()=>{
//     TableFinding(()=>{
//         Menu(()=>{
//             PriceCheck(()=>{
//                 Starter(()=>{
//                     MainCourse(()=>{
//                         dessert(()=>{
//                             payBill();
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

//Promise

// reachedRestaured(function(){
//     console.log("Reached eagle motel");
// })
// .then(TableFinding)
// .then(Menu)
// .then(PriceCheck)
// .then(Starter)
// .then(MainCourse)
// .then(dessert)
// .then(payBill)


// const myRestaurantPromise=new Promise(resolve,reject){
//     if(1:30>time>2:30){
//         resolve("Yes Successfully Reached");
//     }
//     else{
//         reject("Cant Reach at time");
//     }
// }

//Promise api's
//1. Promise.all()
//2. Promise.allSettled()
//3. Promise.race()
//4. Promise.any()

// const githubData=fetch("https://github.com/kuber-2003");
// setTimeout(()=>{
//     console.log(githubData);
// },1000)

// console.log(githubData);

// const cart=["shoes","watches","shirt", "glasses"];

// createOrder(cart,callback){
//     console.log("Order Creation")
//     orderPayment(orderId,callback){
//         console.log("Order Payment")
//         orderSummary(orderId,callback){
//         console.log("Order Summary")
//         updateWallet(){
//             console.log("Wallet Updated")
//         }

//         }
//     }
// }

// const cart=["shoes","watches","shirt", "glasses"];

// function createOrder(cart){
//     const myPromise=new Promise(function(resolve,reject){
//         if(cart.length>0){
//             resolve("12345");
//         }
//         else{
//             const err=new Error("Order Failed");
//             reject(err.message);
//         }

//     });
//     return myPromise;
// }

// function orderPayment(orderId){
//     console.log("order Payment Successfull",orderId);
// }
// function orderSummary(orderId){
//     console.log("Order Summary Created",orderId);

// }
// function updateWallet(){
//     console.log("Wallest Updated");
// }

// // console.log(createOrder(cart));

// createOrder(cart)
// .catch( function (err){
//     console.log("Error Occured");
//     console.log(err.message);
// })
// .then(function (orderId){
//     return orderPayment(orderId);
// })
// .then(function (orderId){
//     return orderSummary(orderId);

// })
// .then(function (orderId){
//     return updateWallet();
// })


// createOrder(cart)
// .then(function orderPayment(orderId){
//     console.log("Order Paymenyt Successfull"),orderId;
// })
// .then(function orderSummary(orderId){
//     console.log("Order Summary",orderId);
// })

// createOrder(cart)
// .then(orderPayment(orderId))
// .then(orderSummary(orderId))
// .then(updateWallet)


//
