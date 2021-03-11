# Type of a function
# the word "def", the name of the function, parenthesis(), then a colon :
# in the body of the funtion, you need a return statement aka tab

# def printMessage():
#     return print("hello my friends")

# def add(number1, number2):
#     return print(number1 + number2)

# print(add(1,2))
# printMessage()

# string1 = input("Enter a word")
# string2 = input("Enter another word")

# def input(string1, string2):
#     return string1 + string2

# print(input(string1, string2))

# def division(number1, number2):
#     return print(number / number2)

# division(10, 5)

# string1 = input("Type in a word to find out how many letters: ")
# lengthOfString = len(string1)
# print(lengthOfString)
# def exampleCalc(word):
#     length = len(word)
#     return print(length)

# exampleCalc(string1)

# Class Example
askUserToType = input("Type in a word: ")
askUserToTypeAgain = input("Type in another word: ")

def printWhatUserTyped(firstMessageTyped, SecondMessageTyped):
    combinedMessage = firstMessageTyped + " " + SecondMessageTyped
    return print(combinedMessage)

printWhatUserTyped(askUserToType, askUserToTypeAgain)

# My Example
askUserForCity = input("What city do you live in? ")
askUserForState = input("What state do you live in? ")

def printUserLocation(cityTyped, stateTyped):
    location = cityTyped + "," + " " + stateTyped
    return print(location)

printUserLocation(askUserForCity, askUserForState)


# Scope
# Scope is about habing access to certain things in your program
