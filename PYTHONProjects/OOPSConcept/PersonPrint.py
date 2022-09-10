class Person:

    def __init__(self,name,age) -> None:
        self.name = name
        self.age = age
    
    def printData(self):
        print("hello my Name is ",self.name)
        print("And Age is ", self.age)
P11 = Person("Harish Kumar Gupta",20)
P11.printData()
