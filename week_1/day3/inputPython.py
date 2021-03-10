# Take the users first name
nameOfUser = input("What is your first name? ")
# Store the users first name into a number value that we can use
lengthOfUserName = len(nameOfUser)
while(lengthOfUserName < 1):
    nameOfUser = input("What is your first name? ")
    lengthOfUserName = len(nameOfUser)

lastNameOfUser = input("What is your last name? ")
lengthOfUserLastName = len(lastNameOfUser)
while(lengthOfUserLastName < 1):
    lastNameOfUser = input("What is your last name? ")
    lengthOfUserLastName = len(lastNameOfUser)

print("The user name is %s %s" % (nameOfUser, lastNameOfUser))

# Take the users last name

# if lengthOfUserName > 0: 
#     # if this username length is greater than 0, aka it returns TRUE, we do the code in here
#     print("Valid name entered")
#     nameOfFriend = input("What is your friends name? ")
#     print("Your friends name is ", nameOfFriend)
# else: 
#     print("Please enter at least one letter..literally one letter.") 
# # if statments. Do something if a certain condition happens or doesn't happen.
# # Underneath the if statement, you need to indent your code, to let the if statement know what code it belongs to 

# # While loop - a condition has to be true to keep your loop running
# while (lengthOfUserName < 0):


# lastNameOfUser = input("What is your last name? ")
# # Store the users last name into a number value that we can use
# lengthOfUserLastName = len(lastNameOfUser)

# print("This is the length of the users first name is ", lengthOfUserName)
# print("This is the length of the users last name is ", lengthOfUserLastName)
# print("Hello %s %s, Welcome to Python!" % (nameOfUser, lastNameOfUser))
# print("Hello %s %s " % (nameOfUser, lastNameOfUser))