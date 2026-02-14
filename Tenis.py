X = 0
for i in range(6) :
    value = input("")
    
    if value == "V" :
        
        X += 1
        
if X == 6 or X == 5:
    print("1")
elif X == 4 or X == 3:
    print("2")
elif X == 2 or X == 1:
    print("3")
else :
    print("-1")
