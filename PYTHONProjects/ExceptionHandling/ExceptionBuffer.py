try:
    a = [1,2,3]
    print(a[1])
except LookupError:
    print("Index out of bound Error")
else:
    print("Done okay")
