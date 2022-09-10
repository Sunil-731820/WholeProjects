def myFunction(x):
    x[0] = 20
    print(x)
list1 = [10,11,12,13,14,15]
print("before the updation of the list is ")
print(list1)
myFunction(list1)
print("after the updation of the list is ")
print(list1)
