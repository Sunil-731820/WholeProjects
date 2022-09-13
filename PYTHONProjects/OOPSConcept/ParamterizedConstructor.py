from re import S


class Addition:

    first = 0
    second = 0
    third = 0

    def __init__(self,f,s) -> None:
        self.first = f
        self.second = s

    def display(self):
        print("first number : "+ str(self.first))
        print("second Number "+ str(self.second))
        print("Addition is : "+str(self.answer))
    
    def calculate(self):
        self.answer = self.first + self.second
obj = Addition(100,100)
obj.calculate()
obj.display()
