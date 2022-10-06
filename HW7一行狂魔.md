# 计算概论H7
先放一个太长不看版本的
## A+B 问题
~~~
print(sum(list(map(int,input().split()))))
~~~
## 1001 A+B问题
~~~
print(int(input())+int(input()))
~~~
## 1002 将一个三位数反向输出
~~~
print(input()[::-1])
~~~
## 1003 求出圆的周长和面积
~~~
print((lambda x: f"{2*3.14159*x:.4f} {3.14159*x**2:.4f}")(int(input())))
~~~
## 1004 球的体积
~~~
print(f"{3.14*4*float(input())**3/3:.2f}")
~~~
## 1005 计算电阻
~~~
print(f"{1/(1/float(input())+1/float(input())):.2f}")
~~~
## 1006 等差数列末项计算
~~~
print((lambda x,y,n:f"{x+(n-1)*(y-x)}")(int(input()),int(input()),int(input())))
~~~
## 1007 计算分数的浮点数值
~~~
print(f"{int(input())/int(input()):.9f}")
~~~
## 1008 计算平均数
~~~
print(f"{(float(input())+float(input())+float(input()))/3:.2f}")
~~~
## 1009 商和余数
~~~
print((lambda x,y:f"{x//y} {x%y}")(int(input()),int(input())))
~~~
## 1010 苹果和虫子
~~~
print((lambda n,x,y:f"{n+(-y)//x}")(int(input()),int(input()),int(input())))
~~~
## 1011 斜边上的高
~~~
print((lambda x,y:f"{x*y/(x*x+y*y)**0.5:.2f}")(float(input()),float(input())))
~~~