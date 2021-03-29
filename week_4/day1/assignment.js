// Define Variables 
let userName = "Taylor";
let userDOB = "01111995";

// define an array in javascript
let namesInArray = [
    "Taylor", 
    "Justin", 
    "Izzy", 
    "Lyndsay"
];

// define an object in javascript
let userInfo = {
    taylor: {
        name: "Taylor",
        userDOB: "01111995",
    },
    justin: {
        name: "Justin",
        userDOB: "04231993",
    },
    izzy: {
        name: "Izzy",
        userDOB: "09201995",
    },
    lyndsay: {
        name: "Lyndsay",
        userDOB: "01101995",
    }
}
// define an integer
let age = 26

// define a string
let welcomeMessage = "Please log in your information.";

// re-assign the string you defined above to "This is a new string"



// create a new variable that takes your integer above and multiplies it by 5
console.log(age * 5);

// Create an array that has the following in it ["swag", 123123, true, false, "boolean"]

randomArray = ["swag", 123123, true, false, "boolean"]
// print out 123123
console.log(randomArray[1])
// print out false
console.log(randomArray[3])
// print out boolean
console.log(randomArray[4])
// bonus: print out the length of the array
console.log(randomArray.length)
// -Create an object that has the following structure name: "name", age: 20, height: 7.1, metric: "ft"
// You will create 5 objects with unique names, with unique ages, height.

let complexObject = {
    jessica: {
      name: "jessica",
      age: 26,
      height: "5'4",
      metric: "ft",
    },
    whitney: {
      name: "whitney",
      age: 26,
      height: "5'5",
      metric: "ft",
    },
    tay: {
      name: "tay",
      age: 26,
      height: "5'8",
      metric: "ft",
    },
    joey: {
      name: "joey",
      age: 24,
      height: "6'1",
      metric: "ft",
    },
    michael: {
      name: "michael",
      age: 25,
      height: "6'3",
      metric: "ft",
    },
  };
// Print out the first objects name
console.log(complexObject.jessica.name);
// Print out the last objects age
console.log(complexObject.michael.age);
// print out the 3rd objects height
console.log(complexObject.joey.height);
// change the 3rd objects height to be 1.2
complexObject.joey.height= 1.2;
console.log(complexObject.joey.height);

// change the 3rd objects metric to be "meters"
complexObject.joey.metric = "m";
console.log(complexObject.joey.metric);

// create a new key on the 2nd object called sport. Assign it your favorite sport
complexObject.whitney.sport = "swimming";
console.log(complexObject.whitney.sport);