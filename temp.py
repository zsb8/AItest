import pandas as pd
a=[{"a":i,"b":2*i}   for i in range(3)] #注意这里的表达方法，利用for循环，注入数据
print (a)
b=pd.DataFrame(a)
print (b)

print ("ok了")