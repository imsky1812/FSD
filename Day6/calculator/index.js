const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const output = document.getElementById("output");
function add(){
    if(num1.value=="" || num2.value==""){
        alert("Please enter both numbers");
    }
    const op = parseFloat(num1.alue) + parseFloat(num2.value);
    console.log("add");
}
function sub(){
    const op = parseFloat(num1.value) - parseFloat(num2.value);
    console.log("sub");
}
function mul(){
    const op = parseFloat(num1.value) * parseFloat(num2.value);
    console.log("mul");
}
function div(){
    const op = parseFloat(num1.value) / parseFloat(num2.value);
    console.log("div");
}