// const myPromiseFromNetlfix=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         //resolve("Fetched Data From Netflix");
//         reject("Man made Error")
//     },1000);
// });

// const myPromiseFromTwitter=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Fetched Data From Twitter");
//         //reject("Man made Error")
//     },2000);
// });

// const myPromiseFromGithub=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Fetched Data From Github");
//     },3000);
// });

// const myPromiseFromHotstar=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Fetched Data From Hotstar");
//     },4000);
// });

//Promise.all()

// const dataFromAll=Promise.all([myPromiseFromGithub,myPromiseFromNetlfix,myPromiseFromTwitter,myPromiseFromHotstar]);

// console.log(dataFromAll);

//Promise.allSettled()

// const FromAllSetted=Promise.all([myPromiseFromGithub,myPromiseFromNetlfix,myPromiseFromTwitter,myPromiseFromHotstar]);

// console.log(FromAllSetted);

//Promise.race

// const fromRace=Promise.race([myPromiseFromGithub,myPromiseFromNetlfix,myPromiseFromTwitter,myPromiseFromHotstar]);

// console.log(fromRace);

// const fromAny=Promise.any([myPromiseFromGithub,myPromiseFromNetlfix,myPromiseFromTwitter,myPromiseFromHotstar]);

// console.log(fromAny);


//Async-Await
//async is a feature to make any function asynchronous
//async is also  a promise

// async function techDirectFunction(){
//     console.log("This is helloTech MAHINDRA");
// }
//  const techData=techDirectFunction();

//  console.log(techData);

//  techData.then((res)=>{
//     return res;
//  })

//  const helloTechMahindra=async function(){
//     console.log("This is helloTECH MAHINDRSA");
//  }
//  console.log(helloTechMahindra);

//  helloTechMahindra();


// const samarPromise=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("I will be on time");
//     },4000);
// })

// console.log("Hello Class");

// function techMahindra(){
//     console.log("Samar");
// }

// techMahindra();

// console.log("End Class")

//====================================================================================================


// console.log("Start"); 

// const projectSubmissionByKuber=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Submitted Project Successfully");
//     },5000);
// })
// console.log("lunch");

// async function projectEvaluation(){
//     console.log("Attendance Viva");
//     const projectFile=await projectSubmissionByKuber;
//     console.log(projectFile);
//     console.log("Project File Check");
// }

// projectEvaluation();
// console.log("Class End");

// console.log("Start"); 

// const projectSubmissionByKuber=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Kuber Writing");
//     },10000);
// })
// console.log("Attendance Marking");

// async function projectEvaluation(){
//     const projectFile=await projectSubmissionByKuber;
//     console.log(projectFile);
//     console.log("class end");
// }

// projectEvaluation();

/////////////////////////////////////////////////////////////////////////////////////////////////////

//LETS FETCH SOME DATA

async function fetchApiData(){
    try{
        const data=await fetch("https://api.chuknorris.io/jokes/categories");
        const mydata=await data.json();
        return mydata;
    }
    catch(err){
        console.log(err);
    }
}

const finalData=fetchApiData();

finalData.then((res)=>{
    console.log(res);
})


