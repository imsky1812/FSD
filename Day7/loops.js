// const n=[1,2,3,4,5,6,7,8];
// for(let i=0; i<n.length; i++){
//     console.log(n[i]);
// };

// n.forEach((ele)=>console.log(ele));

// for...of loop
const fruits=["apple","banana","mango","orange"];
for(const fruit of fruits){
    console.log(fruit);
}

for(const index in fruits){
    console.log(index);
    console.log(fruits[index]);
}