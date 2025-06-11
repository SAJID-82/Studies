// // CallBacks

// function getData(dataId, getNextData){
//     setTimeout(() => {
//        console.log("data", dataId);
//          if(getNextData){
//               getNextData();
//          }
//     }, 2000)
// }

// // callback hell = (nested callbacks)
// getData(1, () => {
//   console.log("getting data 2");
//   getData(2, () => {
//     console.log("getting data 3");
//     getData(3, () => {
//       console.log("data completed");
//     });
//   });
// });  



// Promises

// let promise = new Promise((resolve, reject) => {
//     console.log("Promise !");
//     resolve("Promise completed"); // fulfilled state
//     // reject("promise failed"); // unfulfilled state
// })

// function getData(dataId){
//     return new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         console.log("data", dataId);
//         resolve("Success")
//     }, 3000)
//  });
// }

// // Promise Chain

// console.log("Fetching Data 1...");

// getData(1)
//    .then((res) => {

//        setTimeout(() => {
//                console.log("Fetching Data 2...");
//        }, 1000);

//        return getData(2);
//    })

//    .then((res) => {

//        setTimeout(() => {
//                console.log("Fetching Data 2...");
//        }, 1000);

//        return getData(3)
//    })

//    .then((res) => {
//        console.log(" Promise Success")
//    })


// Async Await

function getData(dataId){
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("data", dataId);
        resolve("Success")
    }, 2000)
 });
}

(async function (){

    console.log("Fetching Data 1...");
    await getData(1);

    setTimeout(() => {
    console.log("Fetching Data 2...")
    }, 500);

    await getData(2);

    setTimeout(() => {
    console.log("Fetching Data 3...")
    }, 500);
    
    await getData(3);

    setTimeout(() => {
    console.log("Fetching Data 4...")
    }, 500);

    await getData(4);

    setTimeout(() => {
    console.log("Fetching Data 5...")
    }, 500);
    
    await getData(5);
    
    setTimeout(() => {
    console.log("Fetching Data 6...")
    }, 500);

    await getData(6);

})()



// async await >> promise chain >> callback hell