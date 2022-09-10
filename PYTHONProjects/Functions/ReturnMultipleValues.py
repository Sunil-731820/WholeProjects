class Test:
    def __init__(self) -> None:
        self.str = "GeeksForGeeks"
        self.x = 20
def fun():
    return Test()
t = fun()
print(t.str)
print(t.x)

# Again doing the same

class MyTest:
    def __init__(self) -> None:
        self.name = "Sunil Kumar"
        self.age = 12
        self.address = "Bangalore"
def data():
    return MyTest()
fetching = data()
print("The Name is ",fetching.name)
print("The Age is ",fetching.age)
print("The Address is ",fetching.address)
