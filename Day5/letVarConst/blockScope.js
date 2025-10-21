if(true){
    var a =20;
    let b="abc";
    const pi = 3.14;

    console.log("In block scope a : ",a);
    console.log("In block scope b : ",b);
    console.log("In block scope pi : ",pi);
}
console.log("Outside the block Scope : ",a);
console.log("Outside the block Scope : ",b); //error
console.log("Outside the block Scope : ",pi); // error