# Assignment 1
num1 = input("Enter the first number: ")
lengthOfNum1 = len(num1)
while(lengthOfNum1 < 1):
    num1 = input("Enter the first number: ")
    lengthOfNum1 = len(num1)
operator = input("Enter the operation as +, -, *, or /: ")
lengthOfOperator = len(operator)
while(lengthOfOperator < 1):
    operator = input("Enter the operation as +, -, *, or /: ")
    lengthOfOperator = len(operator)
num2 = input("Enter the second number: ")
lengthOfNum2 = len(num2)
while(lengthOfNum2 < 1):
    num2 = input("Enter the second number: ")
    lengthOfNum2 = len(num2)
if operator == "+":
    answer = float(num1) + float(num2)
    print(answer)
if operator == "-":
    answer = float(num1) - float(num2)
    print(answer)
if operator == "*":
    answer = float(num1) * float(num2)
    print(answer)
if operator == "/":
    answer = float(num1) / float(num2)
    print(answer)


# Assignment 2
num = int(input("Enter a number: "))
if (num % 2) == 0:
    print("{0} is Even". format(num))
else:
    print("{0} is Odd". format(num))
