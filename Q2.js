/*
2. The following is an array of 10 students ages:
=> const ages = [19 22 19 24 20 25 26 24 25 24]
 -Sort the array and find the min and max age.
 -Find the median age(one middle item or two middle items divided by two)
 -Find the average age(all items divided by number of items)
 -Find the range of the ages(max minus min)
 -Compare the value of (min - average) and (max - average),use abs() method
*/

const ages = [19,22,19,24,20,25,26,24,25,24];

ages.sort();                                              //array is sorted
console.log(`Sorted Age : ${ages}`);


const minAge = ages[0];                                   //Min age from array
console.log(`Min Age : ${minAge}`);


const maxAge = ages[ages.length-1];                       //Max age from array
console.log(`Max Age : ${maxAge}`);

let medianAge = Math.floor(ages.length / 2);{

if (ages.length % 2 === 0) {
        medianAge = ((ages[medianAge] + ages[medianAge - 1]) / 2);
  } else {                       
        medianAge = (ages[medianAge]);
  }
}
console.log(`Median Age : ${medianAge}`);                 //Median 

const sumAge = ages.reduce((sum,age)=>sum+age,0)
const averageAge = sumAge/ages.length;
console.log(`Average Age : ${averageAge}`);                //Avarage age

const ageRange = maxAge - minAge;
console.log(`Age Range : ${ageRange}`);                    //Age range

const minDifference = Math.abs(minAge - averageAge);
console.log(`Min - Average Difference : ${minDifference}`);     //MIn - average

const maxDifference = Math.abs(maxAge - averageAge);
console.log(`Max - Average Difference : ${maxDifference}`);     //max - average

