print("****TODO APP*****\n" \
    "Please select an option from the drop down menu.\n" \
    "Enter 1 to add task\n" \
    "Enter 2 to delete task\n" \
    "Enter 3 to view all tasks\n")

select = int(input("Select 1, 2, or 3 from list above: ")) 
taskAnswer = input("What is the task? ")
priorityAnswer = input("What is the priority of the task? \n" \
    "High, Medium, or Low\n")

if select == 1:
    print(taskAnswer + "-" + priorityAnswer)
elif select == 2:
    print[]