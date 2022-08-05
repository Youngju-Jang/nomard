def plus(a,b):
    if type(b) is int or type(b) is float:
        return a + b
    else : 
        return None

def minus(a,b):
    return (int(a) - int(b))

def times(a, b):
    return (int(a) * int(b))

def division(a, b):
    return (int(a) / int(b))

def negation(a):
    return (int(a) * (-1))

def power(a, b):
    return (int(a) ** int(b))

def reminder(a, b):
    return (int(a) % int(b))

print(plus(3,"7"))

print(minus("9",1))

print(times("10",2))
print(division("9","3"))
print(negation("-3"))
print(power("10",2))
print(reminder("9","3"))