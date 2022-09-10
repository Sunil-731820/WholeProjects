def SimpleGenerator():
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
for value in SimpleGenerator():
    print(value)



# The Another way 
print("The Another way to Generate ")
def SimpleGeneratorFunction():
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5

x = SimpleGeneratorFunction()
print(x.__next__())
print(x.__next__())
print(x.__next__())
