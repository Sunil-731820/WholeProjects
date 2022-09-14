from collections import ChainMap

d1 = {"a":1,"b":2}
d2 = {"c":3,"d":4}
d3 = {"e":5,"f":6}
print("the second dictionary is ",d1)
print("the second dictionary is ",d2)
print("the second dictionary is ",d3)

print("after the use of the chain map")
c = ChainMap(d1,d2,d3)
print(c)

# accessing the operations 

dic1 = { 'a' : 1, 'b' : 2 }
dic2 = { 'b' : 3, 'c' : 4 }

chain = ChainMap(dic1,dic2)
print("All the chainMap content is ")
print(chain.maps)

print("All the keys are ")
print(chain.keys())

print("All values are ")
print(chain.values())

# if you want to add new dict you can add using new_child()
dic1 = { 'a' : 1, 'b' : 2 }
dic2 = { 'b' : 3, 'c' : 4 }
dic3 = { 'f' : 5 }

chain = ChainMap(dic1,dic2)
print("All content are ")
print(chain.maps)

chain1 = chain.new_child(dic3)
print("after the addition of the new child is ")
print(chain1.maps)




