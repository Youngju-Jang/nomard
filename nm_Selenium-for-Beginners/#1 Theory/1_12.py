from math import ceil, fsum
from calculator import plus, minus


days = ("Mon", "Tue", "Wed", "Thu", "Fri")

for day in days:
    if day is "Wen":
        break
    else:
        print(day)
    
print(ceil(1.2))
print(fsum([1, 2, 3, 4, 5, 6, 7]))

print(plus(2, 3), minus(1, 3))