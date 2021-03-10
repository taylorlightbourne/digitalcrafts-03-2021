num1 = input("Enter the first number: ")
operator = input("Enter the operation as +, -, *, or /: ")
num2 = input("Enter the second number: ")
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