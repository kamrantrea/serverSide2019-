// console.log(234 == '234');
// console.log(234 === '234');
// console.log(234234.235235 == 'cat');
// console.log("cat" == "CAT");
// console.log("cat".toUpperCase() == "CAT");
// console.log(typeof "cat");
// console.log(8*8);
// console.log(parseInt("234.12345"));
// console.log(parseInt("cat"));
// isNaN(parseInt("cat"));
// var i  = "this is a test".indexOf("is");
// console.log(i);
// var s = "this is a test strong.".substr(19,3);
// var s1 = "this is a test string".slice(19,22);
// console.log(s);
// console.log(s1);

// B A S I C   F U N C T I O N
// (function myData (){
//     console.log('myData was executed!');
// } )()


//                T I M E O U T
// function foo(){
//     console.log('2000 milliseconds have passed since this demo started');
//
// }
// setTimeout(foo,2000);


// R E G U L A R       F U N C T I O N
// function funcName(params){
//     return params + 2;
// }
// funcName(2);


// A R R O W  F U N C T I O N
// var funcName = (params) => params + 2 ;
// console.log(funcName(2));



//     A R R O W           F U N C T I O N         E X A M P L E       T W O      P A R A M S
// var funcName = (paramOne, paramTwo) => (paramOne + paramTwo + 2);
// console.log(funcName(2,78));
//
// function outerFunction(arg) {
//     var variableInOuterFunction = arg;
//     function myValue(){
//         console.log(variableInOuterFunction);
//
//     }
//     myValue();
// }
// outerFunction('hello closure!'); //logs hello closure!
//


// T E S T I N G  O N E   P A R A M
// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// }
//
// var add5 = makeAdder(5);
// var add10 = makeAdder(10);
//
// console.log(add5(2));  // 7
// console.log(add10(2)); // 12



// T E S T I N G  T W O    P A R A M S
// function makeAdder(x,w){
//     console.log(x);
//
//     return function(y,z) {
//         return (x + y) + (w + z);
//     };
//     console.log(y);
// }
//
// var add5 = makeAdder(5, 10);
// var add10 = makeAdder(10, 10 );
//
// console.log(add5(2));
// console.log(add10(2));



// T E S T I N G  M A K E S I Z E R
// function makeSizer(size) {
//     return function() {
//         document.body.style.fontSize = size + 'px';
//     };
// }
//
// var size12 = makeSizer(12);
// var size14 = makeSizer(14);
// var size16 = makeSizer(16);



//       R E A D L I N E      S Y N C
// var readlineSync = require('readline-sync');
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');


//      S I M P L E        C A L C U L A T OR

//Task One
// var readlinesync = require('readline-sync');
//
// var val1 = readlinesync.question("Please enter a number: ");
// var val2 = readlinesync.question("Please enter a another number: ");
// var operator;
//
// kamoperate();
// calculate();
//
// function calculate() {
//     if (operator === "+") {
//         console.log(parseInt(val1) + parseInt(val2));
//     } else if (operator === "-") {
//         console.log(parseInt(val1) - parseInt(val2));
//     } else if (operator === "*") {
//         console.log(parseInt(val1) * parseInt(val2));
//     } else if (operator === "/") {
//         console.log(parseInt(val1) / parseInt(val2));
//     } else {
//         operator = kamoperate();
//         calculate();
//     }
// }
//
// function kamoperate() {
//     operator = readlinesync.question("Please enter an operator(+,-,/,*)");
//     return operator;
// }






//Task One
var readlinesync = require('readline-sync');
//
var val1 = readlinesync.question("Please enter a number: ");
var val2 = readlinesync.question("Please enter a another number: ");
var operator;
//
// kamoperate();
// calculate();
//
// function calculate() {
//     if (operator === "+") {
//         console.log(parseInt(val1) + parseInt(val2));
//     } else if (operator === "-") {
//         console.log(parseInt(val1) - parseInt(val2));
//     } else if (operator === "*") {
//         console.log(parseInt(val1) * parseInt(val2));
//     } else if (operator === "/") {
//         console.log(parseInt(val1) / parseInt(val2));
//     } else {
//         operator = kamoperate();
//         calculate();
//     }
// }
//
function kamoperate() {
    operator = readlinesync.question("Please enter an operator(+,-,/,*)");
    return operator;
}




///Task Two

operator = readlinesync.question({
    //ADDITION
    '+': function() {
        console.log(val1 + " + " + val2 + " = " + (val1 + val2));
        return true;
    },
    //SUBTRACTION
    '-': function() {
        console.log(val1 + " - " + num2 + " = " + (val1 - val2));
        return true;
    },
    //MULTIPLY
    '*': function() {
        console.log(val1 + " * " + num2 + " = " + (val1 * val2));
        return true;
    },
    //DIVIDE
    '/': function() {
        console.log(val1 + " / " + num2 + " = " + (val1 / val2));
        return true;
    }
});