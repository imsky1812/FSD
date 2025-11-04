const currentDate = new Date();
console.log("Current Date and Time:", currentDate);

console.log(currentDate.getDate());
console.log(currentDate.getMonth() +1); // Months are zero-based
console.log(currentDate.getFullYear());

const userDate = new Date(2025, 11, 25);

console.log(userDate.getDate());
console.log(userDate.getMonth() + 1);
console.log(userDate.getFullYear());