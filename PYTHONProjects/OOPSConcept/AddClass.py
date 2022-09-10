from audioop import add, mul


class Add:

    def addition(self):
        num1 = 100
        num2 = 200
        sum = num1+num2
        print("the sum of the Two Number is ", sum)
    
    def subtraction(self):
        num1 = 1000
        num2 = 200
        sub = num1-num2
        print("the subtraction of the Two Number is ", sub)
    
    def Multiplication(self):
        num1 = 190
        num2 = 10000
        mult = num1*num2
        print("the Multiplication of the Two number is ",mult)


if __name__=='__main__':
    AddObejcts = Add()
    AddObejcts.addition()
    AddObejcts.subtraction()
    AddObejcts.Multiplication()
    AddObejcts.addition()

