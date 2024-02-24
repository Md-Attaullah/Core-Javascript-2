/*
3. Create a Map to store contact information (name, age, email, location) and 
implement a function to retrieve contact details by name.
*/

const ContactMap = new Map();

ContactMap.set("Rohan",{
    age : 20,
    email : "@gmail.com",
    location : "Bbs"
})

ContactMap.set("Karan",{
    age : 25,
    email : "@google.com",
    location : "Bls"
})

ContactMap.set("Ayaan",{
    age : 29,
    email : "@cognizant.com",
    location : "kol"
})

// function getContact(name){
//     return ContactMap.get(name)
// }

const getContact = (name) =>( ContactMap.get(name))


console.log(getContact("Karan"));
// console.log(ContactMap);