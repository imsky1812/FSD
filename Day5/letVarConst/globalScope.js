var a =20;
let b="abc";
const pi = 3.14;

console.log("In global scope a : ",a);
console.log("In global scope b : ",b);
console.log("In global scope pi : ",pi);

function f(){
    console.log("Value of global scope variable a in function scope: ",a);
    console.log("Value of global scope variable b in function scope: ",b);
    console.log("Value of global scope variable pi in function scope : ",pi);   
}

f();