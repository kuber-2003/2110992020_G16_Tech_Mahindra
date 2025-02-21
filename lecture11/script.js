// call(), apply(), bind()

// call -> function invokes directly
// apply -> function invokes directly
// bind -> we can store the reference of that function,for future calling

// let studentAyush={
//     firstName:"Ayush",
//     lastName:"Singla",
    // getName:function(){
    //   console.log(this.firstName+" "+this.lastName);
    // }
    // getResult:function(){
    //   console.log("Passed");
    // }
//   }
//   let studentJasjot={
//     firstName:"Sahil",
//     lastName:"Aggarwal",
    // getName:function(){
    //   console.log(this.firstName+" "+this.lastName);
    // }
    // getResult:function(){
    //   console.log("Passed");
    // }
//   }
//   let getName=function getName(classStudent){
//     console.log(this.firstName+" "+this.lastName+" from class "+classStudent);
//   }
  
  // var print=studentAyush.firstName+" "+studentAyush.lastName;
  // console.log(print);
  
  // call  multiple values can be return
  // apply single values return
//   const getStudent1=getName.apply(studentAyush,["G16","G17"]);
//   const getStudent2=getName.call(studentJasjot,["G16","G17"]);

  //Bind

//   const getStudentBind=getName.bind(studentSahil,"G16");
//   console.log(getStudentBind());
//   console.log(getStudent1);

//   var print=studentSahil.firstName+" "+ studentSahil.lastName;
//   console.log(print);
//   studentSahil.getResult();

//   studentSahil.getName();


//=========================================================================================


//what is Event Bubbling and Event Capturing 


// document.getElementById("grandParent").addEventListener("click",()=>{
//   console.log("THIS IS GRAND PARENT DIV");
// })


// document.getElementById("parent").addEventListener("click",()=>{
//   console.log("THIS IS PARENT DIV");
// })
// document.getElementById("child").addEventListener("click",()=>{
//   console.log("THIS IS Child DIV");
// })

//event bubbling is happening from child to grandparent
// event capturing is from grandparent to child
//by default it is false, it works as event bubbling


// document.getElementById("cs").addEventListener("click",()=>{
//   window.location.href="localhost/cs";
// })

// document.getElementById("ec").addEventListener("click",()=>{
//   window.location.href="localhost/ec";
// })

// document.getElementById("me").addEventListener("click",()=>{
//   window.location.href="localhost/me";
// })

// document.getElementById("subjects").addEventListener("click",(e)=>{
//   console.log(e);
//   window.location.href=e.target.id;
//   console.log("https://localhost/"+e.target.id);

// })



// docubment.getElementById("searchBox").addEventListener("input",debouncingFunction);
// let whichCall=0;
// let timeout;

// function fetchData(){
//   console.log("Fetching API Data",whichCall++);
// }

// function debouncingFunction(){
//   classTimeout(timeout);
//   timeout=setTimeout(fetchData,2000);
// }




