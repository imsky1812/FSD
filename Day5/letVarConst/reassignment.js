var a =20;
let b="abc";
const pi = 3.14;

console.log("Before Reassignment b : ",b);
console.log("Before Reassignment pi : ",pi);
console.log("Before Reassignment a : ",a);

a = "abc";
b = 20;
// pi = 22/7;

console.log("After Redeclaration a : ",a);
console.log("After Redeclaration b : ",b);
console.log("After Redeclaration pi : ",pi); // -> const cannot be changed.