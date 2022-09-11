class Mother:

    mothername = ""

    def mother(self):
        print(self.mothername)

class Father:

    fatherName = ""

    def father(self):
        print(self.fatherName)


class Son(Mother,Father):

    def parents(self):
        print("These are my Parents Name")
        print("Father Name is : ",self.fatherName)
        print("Mother Name is : ",self.mothername)

s1 = Son()
s1.fatherName = "Ram"
s1.mothername = "Sita"
s1.parents()
