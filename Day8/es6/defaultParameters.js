const add = (a, b, c = 0) => {
    console.log(a + b + c);
}
add(2, 3);
add(2, 3, 4);

const greet = (first, last, middle = "") => {
    console.log(`Hello, ${first} ${middle} ${last}`);
}
greet("John", "Doe");
greet("Jane", "Smith", "A.");