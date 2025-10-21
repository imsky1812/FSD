function fun(){
    var a =20;
    let b="abc";
    const pi = 3.14;

    console.log("In function scope a : ",a);
    console.log("In function scope b : ",b);
    console.log("In function scope pi : ",pi);
}
fun();
console.log("Outside the function Scope : ",a);
// console.log("Outside the function Scope : ",b); 
// console.log("Outside the function Scope : ",pi); 