/*
1. Create an arrow function called square that takes a number as an argument and returns its square Use
the arrow function to calculate the square of a given number and display the result.
*/

const number = 10;

const Square =(num) => ( num*num )

const SquareValue = Square(number);

console.log(`Square of ${number} : ${SquareValue}`);