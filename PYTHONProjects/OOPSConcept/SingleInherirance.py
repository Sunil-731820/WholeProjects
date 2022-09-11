class Parent:
    
    def funct1(self):
        print("This is the parents class")

    def Add(self):
        print("I am calling the Parent class Functions")
        num1 = 100
        num2 = 100
        sum = num1 + num2
        print("The Sum of the Two Number is ",sum)



class Child(Parent):

    def funct2(self):
        print("This is child Function")
    
    def Subtraction(self):
        print("I am calling the Child Class")
        num1 = 1000
        num2 = 2000
        sub = num1-num2
        print("The Subtraction of the Two number is ",sub)


Object = Child()
Object.funct1()
Object.funct2()
Object.Add()
Object.Subtraction()


