

class Person:

    def __init__(self,firstName,lastName) -> None:
        self.firstName = firstName
        self.lastName = lastName

    def printName(self):
        print(self.firstName ,self.lastName)

person = Person("Sunil Kumar ","Gupta")
person.printName()
