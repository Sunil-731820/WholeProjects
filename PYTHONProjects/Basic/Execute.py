import code
from ctypes.wintypes import PINT
from traceback import print_tb


code_str = 'x=5\ny=10\nprint("sum = ",x+y)'
print("the code of the string is ")
print(code_str)

print("the type of the data is ")
print(type(code_str))

code = compile(code_str,'Execute.py','exec')
print(type(code))
exec(code)
# exec(x)