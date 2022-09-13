try:
    k = 5//0
    print(k)
except ZeroDivisionError:
    print("Can not divide the Number by Zero")
finally:
    print("This is always executed")

    