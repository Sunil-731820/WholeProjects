from ast import Add
from ctypes.wintypes import PINT


def func():
    str = "GeeksForGeeks"
    x = 100
    return [str, x]
list1 = func()
print("the list of the Objects is ")
print(list1)


# again Returning the list of the objects is 

def Name():
    FirstName = "Sunil"
    MiddleName = "Kumar"
    LastName = "Gupta"
    Age = 22
    Address = "Bangalore"
    return [FirstName,MiddleName,LastName,Age,Address]
list1 = Name()
print("the List of the Objects is ")
print(list1)


# Returning the Dictionary 

def func():
    d = dict()
    d['str'] = "GeeksForGeeks"
    d['x'] = 22
    return d
d = func()
print("the dictinary is ")
print(d)

# Again returning the data of the object in dict

def Name():
    d = dict()
    d['FirstName'] = "Sunil"
    d['MiddleName'] = "Kumar"
    d["LastName"] = "Gupta"
    return d
d = Name()
print("The Name of the data objects")
print(d)

