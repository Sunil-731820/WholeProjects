from collections import OrderedDict
from multiprocessing.sharedctypes import Value

print("This is the dictionary from the collections")
d = {}
d['a'] = 1
d['b'] = 2
d['c'] = 3
d['d'] = 4

print(d)

print("displaying key and values at the same time ")
for key , value in d.items():
    print(key , value)

# The use of the orderedDict() 
od = OrderedDict()
od['a'] = 1
od['b'] = 2
od['c'] = 3
od['d'] = 4

print("the dictionary is ")
print(od)
for key , value in od.items():
    print(key , value)

    