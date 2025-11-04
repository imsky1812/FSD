// console.log("before defining the function");
// const r1 = add(4, 6);
// console.log(r1);
// hoisting is not done for function expressions
const add = function add(a, b) {
    return a + b;
}
console.log(add);
console.log("after defining the function");
const r1 = add(4, 6);
console.log(r1);