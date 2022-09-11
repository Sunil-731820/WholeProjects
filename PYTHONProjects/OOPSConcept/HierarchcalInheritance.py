class School:

    def funct1(self):
        print("this function is in school")
    
class Student1(School):

    def funct2(self):
        print("This function is in student 1")
    
class Student2(School):

    def funct3(self):
        print("This function is in student2 ")

class Student3(Student1,School):
    def funct4(self):
        print("this function is in student 3")


obj = Student3()
obj.funct1()
obj.funct2()
