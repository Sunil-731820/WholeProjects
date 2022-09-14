from collections import namedtuple

Students = namedtuple(
    'Students',["name","age","DOB"]
)

S = Students("Sunil",23,"17-05-1999")
print("accessing the element is ",S[1])

print("Accessing using . operator")
print(S.name)

print("Accessing the element using getattr()")
print(getattr(S,"DOB"))
