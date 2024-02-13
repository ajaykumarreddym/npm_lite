// const EventEmitter=require('events');
// const myEvent=new EventEmitter();
// var removeall;
// var err;

// myEvent.on('mouseclick',(arg1,arg2)=>{
//     console.log("on event listeners : "+arg1+" "+arg2);
// })

// myEvent.once('keyboard',(arg1,arg2)=>{
//     console.log("Once listner event :"+arg1+" "+arg2);
// })

// //custom message 
// myEvent.on('error',(error)=>{
//     console.log("The error message is : "+error.message);
// })

// for(let j=0;j<5;j++){
//     myEvent.emit('keyboard',"Ajay ","Reddy");
//     if(j==2){
//          myEvent.removeListener('error',errorHandler)
//     }else if(j==4){
//          myEvent.removeAllListeners(()=>{
//             console.log("All listners are removed");
//         })
//     }
//     else{
//         myEvent.on('commonlistener',()=>{
//             console.log("Common/Dummy Listener");
//         })
//     }
// }

// myEvent.emit('mouseclick',"Keep Hover on ","Me");
// myEvent.emit('error',new Error('Something went wrong!!'));
// // console.log(err);
// // myEvent.emit(err);
// // myEvent.emit(removeall);
// // myEvent.emit('commonlistener');


// function errorHandler() {
//     console.log("Remove Listeners after defined time");
// }



// var shadowedVar = "I am global";
// exampleFunction();
// function exampleFunction() {
// //   var shadowedVar = "I am local";
//   console.log(shadowedVar); // "I am local"
// }

// console.log(shadowedVar); 

// let fruits = [1, "banana", "orange"];
// console.log(fruits[2]);


// var a=add(2,3);
// console.log(typeof(a));//hositing a function 

// function add(a, b) {
//         return a + b;
//       }
   
// console.log(typeof("2"+"2"-"2"));
// var a=10;
// var b="10";
// if(a===){
//     console.log(a+" "+b)
//     console.log(typeof(a)+" "+typeof(b))
// }
// let person = { name: "John", age: 30, occupation: "Developer" };
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }let indexOfOrange = fruits.indexOf("orange");
// let fruits = ["apple", "banana", "orange", "grape"];

// let citrus = fruits.slice(1, 3);
// console.log(citrus);
// let removed = fruits.splice(1, 2, "pear", "melon");
// console.log(removed)
// console.log(fruits)


// const delayedFunction = () => {
//       console.log('Delayed function executed!');
//     };
//     setTimeout(delayedFunction,2000); // Executes after 2 seconds
    

// function repeatedFunction() {
//       console.log('Executing repeated function...');
//     }
//     //Set an interval (execute repeatedFunction every 1000 milliseconds)
//     const intervalId = setInterval(repeatedFunction, 1000);
    
// setTimeout(() => {
//       clearInterval(intervalId); // Stop the interval
//       console.log('Interval stopped.');
//     }, 5000);
    


function parentFunction(name, callback){
        setTimeout(callback,10);
        console.log("Hey "+name);
    }
    function randomFunction(){
        console.log("Hey I am callbackfunction");
    }
    parentFunction("Random String",randomFunction);
    