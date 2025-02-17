// function three(){
//     return 3;
    
// }
// function seven(){
//     return 7;

// }
// function eight(){
//     return 8;
// }
// console.log(1);

// setInterval(()=>{
//     console.log(2);
// },2000);

// console.log(three());

// setTimeout(()=>{
//     console.log(4);
// },4000);

// console.log(5);
 
// setInterval(()=>{
//     console.log();
// },6000);



// for(let i=1;i<=6;i++){
//     setTimeout(() => {
//         console.log(i);
//     },1000);
// }

// function x(){
//     var a=7;
    
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var z=x();
// console.log(z);

// z();

// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();

function x(){
    var count=0;
    function increment(){
        count++;
        return count;
}
console.log(increment());
console.log(increment());
console.log(increment());
}
x();

function counter(){
    var count=0;
    return function increment(){
        count++;
        console.log(count);
    }
}

var counter1=counter();
counter1();
counter1();
counter1();
counter1();
