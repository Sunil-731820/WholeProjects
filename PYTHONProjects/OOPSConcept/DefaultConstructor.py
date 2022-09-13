from unicodedata import name


class GeeksforGeeks:

    def __init__(self) -> None:
        self.geek = "GeeksforGeeks"
        self.name = "Sunil Kumar Gupta"

    def print_Geek(self):
        print(self.geek)
        print("the name of the Student is :",self.name)
        

obj = GeeksforGeeks()
obj.print_Geek()
