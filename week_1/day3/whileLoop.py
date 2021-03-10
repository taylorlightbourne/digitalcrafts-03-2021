nameOfUser = input("What is your first name? ")
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

nameOfFriend = input("What is your friend's first name? ")
lengthOfFriendName = len(nameOfFriend)
while(lengthOfFriendName < 1):
    nameOfFriend = input("What is your friend's first name? ")
    lengthOfFriendName = len(nameOfFriend)

lastNameOfFriend = input("What is your friend's last name? ")
lengthOfFriendLastName = len(lastNameOfFriend)
while(lengthOfUserLastName < 1):
    lastNameOfFriend = input("What is your friend's last name? ")
    lengthOfFriendLastName = len(lastNameOfFriend)

print("%s %s is friends with %s %s" % (nameOfUser, lastNameOfUser, nameOfFriend, lastNameOfFriend))