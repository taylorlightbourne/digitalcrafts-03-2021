# Assignment 1

def quitMessage():
    quitMessage = input("Would you like to quit? y (yes) or n (no): ")
    return quitMessage

def operation(operator, num1, num2):
    if(operator == "+"):
        answer = int(num1) + int(num2)
    elif(operator == "*"):
        answer = int(num1) * int(num2)
    elif(operator == "/"):
        answer = int(num1) / int(num2)
    elif(operator == "-"):
        answer = int(num1) - int(num2)
    else:
        print("Operator invalid")
    return print("%s %s %s = %s" % (num1, operator, num2, answer))

choice = ""
while(choice != "y"):
    firstNum = input("Please enter in your first number: ")
    operator = input("Please enter in your choice of operation, ( +, - , * , / ): ")
    secondNum = input("Please enter in your second number: ")
    
    operation(operator, firstNum, secondNum)

    choice = quitMessage()




