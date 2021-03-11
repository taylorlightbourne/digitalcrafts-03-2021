# This is a list
pets = ["dog", "cat", "fish"]

# We access lists varibales by their index, which starts at 0
# Will print dog
dog = pets[0]
print(dog)

# Will print fish
demonSpawn = pets[-1]
print(demonSpawn)

# This is how you access a range of values from the list
# add a colon : and then the end of the range you want to access
myFavoritePets = pets[0:2]
print(myFavoritePets)

# the colon helps access a range of values 
demonSpawns =  pets[-3:-1]
print(demonSpawns)

# Colon with nothing behind, includes all up to that point
demonSpawns =  pets[-3:]
print(demonSpawns)