def welcomeMessage():
    message = ("""
    ****TODO APP*****\n
    Please select an option below:\n
    Enter 1 to add task\n
    Enter 2 to delete task\n 
    Enter 3 to view all tasks\n 
    Press 'q' to quit application\n
    """)

    return print(message)

def quitMessage():
    print("Goodbye, see you next time!")
    return "q"


def addTodo():
    taskToAdd = input("What task would you like to add?\n")
    taskPriority = input("What priority is this?\n high, medium, low?\n")
    todoDictionary["title"] = taskToAdd
    todoDictionary["priority"] = taskPriority
    todoList.append(todoDictionary)
    return print("Added * %s * to your todo list" % taskToAdd)


def delTodo():
    printTodo()
    taskToDelete = input("What task would you like to delete?\n")
    taskIndex = int(taskToDelete) - 1
    taskToBeDeleted = todoList[taskIndex]
    del todoList[taskIndex]
    return print("Deleted * %s * from your todo list" % taskToBeDeleted["title"])


def printTodo():
    count = 1
    print("Here is your todo list: \n")
    for task in todoList:
        print("  %d. %s - %s" % (count, task["title"], task["priority"]))
        count += 1
    return "continue"


def determineTask(userChoice):
    outcome = ""
    if(userChoice == "1"):
        outcome = addTodo()
    elif(userChoice == "2"):
        outcome = delTodo()
    elif(userChoice == "3"):
        outcome = printTodo()
    elif(userChoice == "q"):
        outcome = quitMessage()
    else:
        print("Choose something or hit q to quit.")

    return outcome

choice = ""

while(choice != "q"):
    welcomeMessage()
    usersChoice = input("What would you like to do?\n")
    todoList = []
    outcome = determineTask(usersChoice)
    choice = outcome