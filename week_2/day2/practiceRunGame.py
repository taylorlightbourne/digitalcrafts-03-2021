#testing
# # You have two characters, a Hero and a Goblin
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

# You have two characters, a Hero and a Goblin
# you goal is to let them fight, whoever wins, will be printed out
# in a victory message (fancy way of saying a function that prints)
# whoever is defeated can be printed out in that message as well

# Hero
# name
# attack
# defense
# hp

# Goblin
# name
# attack
# defense
# hp
# clan


class Hero:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Hero"

    def takeDamage(self):
        self.hp -= 5

    class SwagMan:
        def __init__(self, name):
            self.name = name


class Goblin:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Goblin"

    def takeDamage(self):
        self.hp -= 5


class Knight:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Knight"


def characterAttack(char1, char2):

    print(f"{char1.name} attacks {char2.name}")
    char2.takeDamage()
    print(f"{char2.name} takes 5 damage")
    print(f"{char2.name} has {char2.hp} left")


def victoryMessage(hero, goblin):
    print(f"{hero.name} is the victor and they have slain {goblin.name}")


def characterCreation():
    character = ""
    charName = input("What is your name?")
    charClass = input(
        "What is your class? Choose exactly ((k)Knight, (g)Goblin, (h)Hero)")

    if charClass == "h":
        character = Hero(charName, 10)
    elif charClass == "g":
        character = Goblin(charName, 10)
    elif charClass == "k":
        character = Knight(charName, 10)
    else:
        print("Please follow my rules and enter a valid choice")
    return character


joe = Goblin("Joe", 10)
philip = Hero("Phillip", 10)
whitney = Hero("Whitney", 10)
randi = Hero("Randi", 10)
randy = Goblin("Randy", 10)
carlo = Knight("Carlo", 10)

# print("the name of this character", joe.name)
# print("the name of this character", philip.name)
# print("the name of this character", whitney.name)
# print("the name of this character", randi.name)
# print("the name of this character", randy.name)
# print("the name of this character", carlo.name)


# randi to punch randy, simulating your character attacking another character

# you take 5 damage to your health
# I ask the user to type in their name
# I give them health values
# I print out their health values
# I then set a global variable to be the while loop condition
# character = characterCreation()
# print(character.name, character.hp, character.characterClass)

# while character.hp > 0:
#     print("What would you like to do")
#     if()
# characterAttack(randi, randy)
# if randy.hp == 0:
#     victoryMessage(carlo, joe)
    