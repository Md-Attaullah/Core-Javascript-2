/*
Ceate a simple JavaScipt function named displayInfo that takes to parameters (name and role) and
logs a message
 Use call to invoke the displayInfo function with specific arguments
 Use apply to invoke the displayInfo function with arguments passed as an array
 Create another function named greet that logs a greeting with this context
 Use bind to ceate a new function boundGreet with a specific context and log the geeting.
 */

function displayInfo(name,role){
    console.log(`Name : ${name} , Role : ${role}`);
}

displayInfo.call(null,"Atul","Developer");

displayInfo.apply(null,["Rahul","IPS"]);

function greet(){
    console.log(`Hello ${this.name}!`);
}

const employee = {name : "Karan"}
const boundGreet = greet.bind(employee);
boundGreet();

