"""
Burası modül 4.
Hoşgeldiniz!
"""

def factorial(n):
    fact = 1
    while n>0:
        fact = fact * n
        n -= 1
    return fact

def name():
    print("Cooper Sky")