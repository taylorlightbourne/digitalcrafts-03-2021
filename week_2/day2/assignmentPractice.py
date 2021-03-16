# 1. Create a User class, that has the  ability to print the users name and age
# 2. Create a TempUser class, that has the ability to only print his name.
# 3. Create a function that asks you to give the user a name, and give the user an age, 
# and will then create the user for you, and print it to the screen. The user will have a choice to either be a temp user or a User


#1
class PermUser:
    def __init__(self, name, age):
        self.name = name
        self.age = age

taylor = PermUser("Taylor", 26)
print(f"{taylor.name} is {taylor.age}")

#2
class TempUser:
    def __init__(self, name):
        self.name = name

shelly = TempUser("Shelly")
print(f"Your name is {shelly.name}")

#3
def quitMessage():
    print("Goodbye, see you next time!")
    return "q"

userType = input("""Are you (p) permanent or (t) temporary?
Press "q" to quit
""")

def addPermUser():
    permNameToAdd = input("What is your name? ")
    permAgeToAdd = input("What is your age? ")
    return print("Added * %s * as permanent user" % permNameToAdd)

def addTempUser():
    tempNameToAdd = input("What is your name? ")
    return print("Added * %s * as temporary user" % tempNameToAdd)

def determineType(userType):
    outcome = ""
    if(userType == "p"):
        outcome = addPermUser()
    elif(userType == "t"):
        outcome = addTempUser()
    elif(userType == "q"):
        outcome = quitMessage()
    return outcome

choice = ""

while(choice != "q"):
    outcome = determineType(userType)
    choice = outcome
    break
    

