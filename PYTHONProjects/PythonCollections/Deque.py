from collections import deque
from distutils import dep_util

queue = deque(["name","age","DOB"])
print("the deque is ")
print(queue)

queue.append("Address")
print("after adding the value at the end of the deque")
print(queue)

queue.appendleft("pincode")
print("after the appending at the left side of deque is ")
print(queue)
