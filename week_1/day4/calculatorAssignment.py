# Assignment 1
# FUNCTIONS

num1 = int(input("Enter the first number: "))
operation = input("Enter the operation as +, -, *, or /: ")
num2 = int(input("Enter the second number: "))

def add(num1, num2):
    add = (num1 + num2)
    return print(add)


def subtract(num1, num2):
    subtract = (num1 - num2)
    return print(subtract)

def multiply(num1, num2):
    multiply = (num1 * num2)
    return print(multiply)

def divide(num1, num2):
    divide = (num1 / num2)
    return print(divide)

if operation == "+":
    add(num1, num2)
elif operation == "-":
    subtract(num1, num2)
elif operation == "*":
    multiply(num1, num2)
elif operation == "/":
    divide(num1, num2)



# # Assignment 2
# num = int(input("Enter a number: "))
# if (num % 2) == 0:
#     print("{0} is Even". format(num))
# else:
#     print("{0} is Odd". format(num))
