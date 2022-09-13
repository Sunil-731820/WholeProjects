try:
    a = 10//1
    print(a)
except ArithmeticError:
    print("This statement is raising an arithematic error")
else:
    print("Succes")
