# def readyForSchool(backPack, pencilCase):
#     if (backPack == "full" and pencilCase == "full"):
#          print("I'm ready for school!")

# smile = round(300.146515454)
# print(smile)

# Example1
def greet():
    print("Hi There!")
    print("Welcome aboard!")


greet()   

# Example2
def greet(firstName, lastName): ## 2 parameters
    print(f"Hi {firstName} {lastName}!")
    print("Welcome aboard!")

    
greet("Taylor", "Lightbourne")  ## 2 arguments, number must match parameters

# There are two types of functions
# 1- Perform a task
# 2-Retrun a value

# Example3
name = input("Name? ")

def greet(name):
    print(f"Hi {name}")


greet(name)   


# Example4 - Dictionaries
def saveUser(**user):
    print(user["id"])

saveUser(id=1, name="Taylor", age=26)





