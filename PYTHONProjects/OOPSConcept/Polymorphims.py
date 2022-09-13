from itertools import count


class India():

    def capital(self):
        print("New Delhi is a Capital of the India")

    def language(self):
        print("The Language use in India is Hindi")

    def type(self):
        print("India is a developing country")

class USA():

    def capital(self):
        print("Washington DC is the caiptal of the United State Of America")

    def language(self):
        print("The Language used in USA is English ")

    def type(self):
        print("USa is developed Country")
Obj_India = India()
Obj_USA = USA()

for country in (Obj_India,Obj_USA):
    country.capital()
    country.language()
    country.type()
    