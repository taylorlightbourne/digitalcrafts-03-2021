function calculate(operator, number1, number2) {
    if (operator == '+') {
        result = number1 + number2;
        console.log(`You did addition and your answer is ${result}`);
    } else if (operator == '-') {
        result = number1 - number2;
        console.log(`You did subtraction and your answer is ${result}`);
    } else if (operator == '*') {
        result = number1 * number2;
        console.log(`You did multiply and your answer is ${result}`);
    } else if (operator == '/') {
        result = number1 / number2;
        console.log(`You did division and your answer is ${result}`);
    } else {
        console.log("Error");
    };
};

calculate("+", 10, 40);
calculate("-", 55.2, 47.3);
calculate("*", 4, 7);
calculate("/", 50, 5);
calculate("$", 40, 2);

// Notes
// // calculate("multiply", num1, num2);
// // print out the message of whatever operation they did
// // and the correct answer
// calculate("multiply", 23, 84);
// // console.log(" You did multiply and your answer is ${answerHere}")
// calculate("subtract", 102, 84);
// calculate("add", 102, 84);
// calculate("divide", 10, 20);