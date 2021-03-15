# digitalCraftsStudent = {
#     "name": "Taylor",
#     "city": "Newnan",
#     "computer": ["Windows HP Envy"],

# }
# print(digitalCraftsStudent["computer"][0])

# gamer = {
#     "platform": "ps5",
#     "gamingHours": [{"weekday": "9-5"}, {"weekends": "anytime"}],
#     "skill": 'none'
# }
# print(gamer["gamingHours"][0]["weekday"])

# 1. print out a list of engine choices (the whole list)
# 2. print out the horsepower values only (all of them)
# 3. check to see if the value "trim" exist on the car dictionary
# 4. add a new key to the car dictionary called "colors" which will be a list of all possible colors (use 4 color strings)
# 5. find an image and put the url into https://bitly.com/, and paste shortened url into that "image" value
car = {
    "model": "Altima",
    "image": "https://bit.ly/3rUloIL",
    "year": 2020,
    "engineChoices": [
        {
            "v4": {
                "horsepower": 230
            }
        },
        {
            "v6": {
                "horsepower": 300
            }
        },
        {
            "v8": {
                "horsepower": 400
            }
        },
        {
            "v12": {
                "horsepower": 900
            }
        }
    ],
}
#1
# print(car["engineChoices"])

# #2
# print(car["engineChoices"])

# for horsepower in car["engineChoices"]:
#     print(horsepower.values())
# for horsepower in range([3]):
#     print("engineChoices"[horsepower])

# print(car["engineChoices"])

for hpvalue in car ["engineChoices"]:
    for key,value in hpvalue.items():
        print(value["horsepower"])




