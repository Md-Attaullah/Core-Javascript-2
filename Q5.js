/*
5. You are developing a program to manage a list of unique items. Write a JavaScript program that uses a
Set to store a collection of unique numbers. Use the Map object to associate each number with its square.
Finally, print both the unique numbers and their corresponding squares.
*/

let UniqueNum = new Set([2,5,3,7,3,1,2,5]);

console.log(UniqueNum);

let SqNumMap = new Map();

UniqueNum.forEach (number  => {
    SqNumMap.set(number,number*number);
})

console.log("Unique Number");
console.log(Array.from(UniqueNum).join(', '));

console.log("Number-Square Map");
SqNumMap.forEach((Square,number)=> {
console.log(`${number} : ${Square}`)});
