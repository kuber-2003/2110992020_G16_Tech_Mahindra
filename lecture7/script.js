// function a(){
//     console.log("Function a");
// }

// function b(a){
//     console.log("Function b");
//     x();
// }

// b(a());

// var count=0;

// document.getElementById("btn-click").addEventListener('click' ,function(){
//     count++;
//     console.log("Clicked");
// });
// document.getElementById("btn-click2").addEventListener('click' ,function(){
//     count++;
//     console.log("Clicked");
// });


function reachedRestaured(callback){
    console.log("Reached Restaured");
    setTimeout(callback,1000);
}
function TableFinding(callback){
    console.log("Table Finding");
    setTimeout(callback,1000);
}
function Menu(callback){
    console.log("Menu Checked");
    setTimeout(callback,1000);
}
function PriceCheck(callback){
    console.log("Price Checked");
    setTimeout(callback,1000);
}
function Starter(callback){
    console.log("Starter Ordered");
    setTimeout(callback,1000);
}
function MainCourse(callback){
    console.log("Main Course Ordered");
    setTimeout(callback,1000);
}
function dessert(callback){
    console.log("Dessert Order");
    setTimeout(callback,1000);
}
function payBill(callback){
    console.log("Pay Bill");
    setTimeout(callback,1000);
}

//chaining the callbacks

reachedRestaured(TableFinding(Menu(PriceCheck(Starter(MainCourse(dessert(payBill)))))));

reachedRestaured(()=>{
    TableFinding(()=>{
        Menu(()=>{
            PriceCheck(()=>{
                Starter(()=>{
                    MainCourse(()=>{
                        dessert(()=>{
                            payBill();
                        })
                    })
                })
            })
        })
    })
})

