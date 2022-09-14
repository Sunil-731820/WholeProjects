from collections import defaultdict


def def_value():
    return "Not Present in the dictionary"
d = defaultdict(def_value)
d["a"] = 1
d["b"] = 2
print("the dictionary is ")
print(d)
print("the first element of the dict is ",d["a"])
print("The Second Element of the dict is ",d["b"])
print("searching but not exist then ")
print(d["c"])
print("again i am doing the same things again ")
print(d["d"])

