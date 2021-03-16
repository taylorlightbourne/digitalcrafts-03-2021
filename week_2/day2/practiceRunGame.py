# You have two characters, a Hero and a Goblin
# Your goal is to let them fight, whoever wins, will be printed out in a victory message
# (Fancy way of saying a function that prints)
# Whoever is defeated can be printed out in that message as well

# # Hero
#     name
#     attack
#     defense
#     health

# # Goblin
#     name
#     attack
#     defense
#     health
#     clan

class Hero:
    def __init__(self, name):
        self.name = name

class Goblin:
    def __init__(self, name):
        self.name = name

david = Hero("David")
shrek = Goblin("Shrek")

print("The name of this character is", david.name)
print("The name of this character is", shrek.name)

def characterCreation():
    character = ""
    charName = input("What is your name? ")
    charClass = input("What is your class? Choose exactly ((k)Knight, (g)Goblin, (h)Hero)")

    if charClass == "h":
        character = Hero(charName, 10)
    elif charClass == "g":
        character = Goblin(charName, 10)    
    elif charClass == "k":
        character = Knight(charName, 10)
    else:
        print("Please enter a valid choice.")
    return character

    