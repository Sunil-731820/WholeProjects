
class GrandFather:

    def __init__(self,grandfathername) -> None:
        self.grandfathername = grandfathername

class Father(GrandFather):

    def __init__(self, fathername,grandfathername) -> None:
        self.fathername = fathername

        GrandFather.__init__(self,grandfathername)

class Son(Father):

    def __init__(self, sonname,fathername, grandfathername) -> None:
        self.sonname = sonname

        Father.__init__(self,fathername,grandfathername)

    def print_name(self):
        print("GrandFather Name is :" , self.grandfathername)
        print("Father Name is ",self.fathername)
        print("Son name is :",self.sonname)
        print("again GranFather Name is :",self.grandfathername)
        print("Again Son Name is :",self.sonname)
        print("Again father Name is :",self.fathername)

s1 = Son("Prince","Rampal","Lal Mani")
print(s1.grandfathername)
s1.print_name()

