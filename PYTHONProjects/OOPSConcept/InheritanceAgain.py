class Person:

    def __init__(self,firstName,lastName) -> None:
        self.firstName = firstName
        self.lastName = lastName
    
    def printname(self):
        print(self.firstName ,self.lastName)


class Student(Person):
    def __init__(self, firstName, lastName) -> None:
        super().__init__(firstName, lastName)
x = Student("Mike","olsen")
y1 = Student("Sunil","Kumar")
x.printname()
y1.printname()

