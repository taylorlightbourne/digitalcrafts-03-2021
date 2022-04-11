// Write a function that returns the sum of all values of an array
const testArray = [2, 2, 2, 5, 6, 3, 1];
const stringArray = ["hahaha", "lol", "hehe", "you got served"];
const testString = "You da bomb.com!";
const numPal = 576675;

function amountTotal(amount) {
    var total = 0;
    for (i = 0; i < amount.length; ++i) {
         total += amount[i]; // add each element in an array to total
    }
    return total; // return sum of elements in array
}

console.log(amountTotal(testArray)); // 6

// Write a function that returns the average of the elements in an array of numbers
function averageAmount(amount) {
    var total = 0;

    for (i = 0; i < amount.length; ++i) {
        total += amount[i]; // add each element in an array to total
   }
   average = total / amount.length; // 21 / 7

   return average;
}
console.log(averageAmount(testArray)); // 3

// Write a function that returns the longest string in an array of strings
var longest = stringArray.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
);

console.log(longest);

// OR AKA my fav solution

var lgth = 0;
var longestString;

for (var i = 0; i < stringArray.length; i++) {
  if (stringArray[i].length > lgth) {
    var lgth = stringArray[i].length;
    longestString = stringArray[i];
  }
}

console.log(longestString);

// Write a function that returns a string with vowels removed
function removeVowels( input ){
    return input.replace(/[aeiouAEIOU]/g, "");
}

console.log(removeVowels(testString));

// Write a function that determines whether a string is a palindrome (a word that has the same spelling forward and backwards)
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g; // to remove unwanted characters
    var lowRegStr = str.toLowerCase().replace(re, ''); // lowercase, remove re and spaces
    var reverseStr = lowRegStr.split('').reverse().join(''); // create sub string to only chars, reverse, then join back together
    return reverseStr === lowRegStr;
  }
  console.log(palindrome("A man, a plan, a canal. Panama")); // true

  console.log(palindrome(testString)); // false

   // Alternate version: check whether a number is a palindrome (the same digits forward and backward).


   function isPalindrome(num)
   {
       var tmp=0, x, nbr, y;
 
       nbr = num;
 
       y = nbr;
       while(nbr > 0)
       {
         //Compare the first digit with the last digit
         x = nbr%10;
         nbr = parseInt(nbr/10);
         tmp = tmp*10+x;
       }
       //Check whether tmp and y are the same or not.
       if(tmp == y)
       {
          console.log("true");
       }
       else
       {
        console.log("false");
       }
   }
    console.log(isPalindrome(numPal));


    // Write a function that plays FizzBuzz. This or a variation is a very common interview problem.

    for (var i = 1; i < 101; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }