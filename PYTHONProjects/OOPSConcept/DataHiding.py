class MyClass:
    _hiddenVaribale = 0;
    def add(self,increement):
        self._hiddenVaribale +=increement
        print(self._hiddenVaribale)
MyObjects = MyClass()
MyObjects.add(2)
MyObjects.add(5)

print(MyObjects._hiddenVaribale)
