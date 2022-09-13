from logging import RootLogger
from unicodedata import name


class CSSStudent():
    stream = "cse"
    def __init__(self,name,roll) -> None:
        self.name = name
        self.roll = roll

a = CSSStudent("Geeks",1)
b = CSSStudent("for",2)
print(a.stream)
print(b.stream)
print(a.name)
print(b.name)
print(a.roll)
print(b.roll)
