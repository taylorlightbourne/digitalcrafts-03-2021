pets = ["dog", "cat", "fish", "pikachu"]
otherPets = ["mouse", "bird", "rabbit"]
# print(len(pets))

# Loop over a list
index = 0

# while index < len(pets):
#     pet = pets[index]
#     print("What pet are you? I'm a %s" % pet)
#     index += 1
    # index = index + 1, same as above

# For..In loops are better for lists than while lists.
count = 0 
for pet in pets:
    print(pet)
    print(count)
    count += 1

# How to combine the lists?
combinedLists = pets + otherPets
print(combinedLists)