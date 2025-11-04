const add = (...args) => {
    console.log(args);
    let sum = 0;
    args.forEach((ele) => sum += ele);
    console.log("Sum is: " + sum);
}
add(1,2,3,4,5,6,7,8,9,10,11,12);