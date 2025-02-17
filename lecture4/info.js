// One thread only - Process will take place 
// Loosely type language
//Synchoronous vs Asynchronous
// Synchornous- When code run line by line

// Aysnchronous - when some code run parallely or wait for their own execution

// Javscript is a sysnchronous and asynchrounous is its feature

// GEC(Global execution context)

var a = 10;
function SquareTwoNumbers(x){
    var ans = x*x;
    return ans;
}
console.log(SquareTwoNumbers(a));

//After GEC is formed then its comes in First phase
//Vaiable
//function
//Stores in memory

// is var and let hoisted or not?
// Yes, both are hoisted

//what is window?
// Parent of dom. or Global object

//Lexical order
//child-calls-parent-calls-grandparent