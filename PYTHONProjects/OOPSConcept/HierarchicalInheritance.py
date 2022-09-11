class Parents:

    def funct1(self):
        print("This function is in parents class")


class Child1(Parents):

    def funct2(self):
        print("This function is in child 1 class")

class Child2(Parents):
    def funct3(self):
        print("this function is in child2 class")

Object1 = Child1()
Object2 = Child2()
Object1.funct1()
Object1.funct2()

Object2.funct1()
Object2.funct3()


