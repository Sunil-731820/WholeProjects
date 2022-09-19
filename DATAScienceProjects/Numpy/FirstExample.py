from ctypes.wintypes import PINT
import numpy as np
arr = np.array([1,2,3,4,5])
print("hello world")
print(arr)
# print(np.ndim())

arr1 = np.array([[1,2,3,4,5],[5,6,7,8]])
print("the 2d Array is ")
print(arr1)

print("the size of the array is ",arr1.itemsize)
