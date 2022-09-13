from datetime import date
class Person:

    def __init__(self,name,age) -> None:
        self.name = name
        self.age = age
    

    # I am Creating the class Method for this

    @classmethod
    def BirthYear(cls,name ,year):
        return cls(name,date.today().year-year)
    
    @staticmethod
    def isAdult(age):
        return age>18

person1 = Person("mayank",21)
person2 = Person.BirthYear("Mayank",1996)
print(person1.age)
print(person2.age)

print(Person.isAdult(22))


