## 安装、环境变量 、编译工具

```
    工具使用：pycharm
    编写方式：换行缩进
```

## 基本语法

```python
    默认编码是 ASCII 格式，想要中文需文件开头加入 # -*- coding: UTF-8 -*- 或者 # coding=utf-8 就行了

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-

    print( "你好，世界" )

    1 所有标识符可以包括英文、数字以及下划线(_)，但不能以数字开头
    2 单下划线开头 _foo 的代表不能直接访问的类属性，需通过类提供的接口进行访问，不能用 from _foo import * 而导入
    3 通过缩进来写模块
    4 单行注释采用 # 开头
    5 同一行显示多条语句时，用;分隔

    print 打印
    dir 查看
    多变量赋值
    a = b = c = 1；a, b, c = 1, 2, "john"
    del语句删除一些对象的引用
        - del var1[,var2[,var3[....,varN]]]
    eval(str )              用来计算在字符串中的有效Python表达式,并返回一个对象

```

## 数据类型

```python
    + Numbers 数字 int long float complex
        - 类型转换
            + int(x [,base ])  long(x [,base ]) float(x )   complex(real [,imag ])
        - 运算模块 math(很多浮点数) cmath(复数运算)
        - 通用方法 abs(x) ceil(x) floor(x) max(x1, x2,...) min(x1, x2,...) pow(x, y)

    + String 字符串
        - 可通过[头下标:尾下标]截取字符，s = 'abcdef';print s[1:5]
        - 转换 str(x ) repr(x )
        - 字符串转义

    + List 列表
        - 转换 list(s )
        - list函数
            + len(list) cmp(list1, list2) max(list) min(list)
        - list操作函数
            + append(obj) count(obj) index(obj) insert(index, obj)
            pop([index=-1]) reverse() sort(cmp=None, key=None, reverse=False)
        list = [ 'runoob', 786 , 2.23, 'john', 70.2 ]
        print list[0]
        list[0] =100

    + Tuple 元组
        - 转换 tuple(s )
        - Tuple函数
            + len(tuple) cmp(tuple1, tuple2) max(tuple) min(tuple)
        tuple = ( 'runoob', 786 , 2.23, 'john', 70.2 )类似数组，但是元组不能二次赋值，相当于只读列表,用括号
        print tuple[0]
        tuple[0] =100  会报错

    + Dictionary 字典
        - Dictionary函数
            + len(dict) cmp(dict1, dict2) str(dict) type(variable)
        - dictionary操作函数
            + dict.clear() dict.copy() dict.fromkeys(seq[, val]) 	dict.get(key, default=None)
           	dict.items() dict.update(dict2)  dict.values() pop(key[,default])
        tinydict = {'name': 'runoob','code':6734, 'dept': 'sales'}
        print dict['one']          # 输出键为'one' 的值
        print dict[2]              # 输出键为 2 的值
        print tinydict.keys()      # 输出所有键
        print tinydict.values()    # 输出所有值
```

## 运算、条件、循环

```python
    =赋值 +=加法 -=减法 *=乘法 /=除法 %=取模赋值运算符 **=幂赋值运算符 //=取整除赋值运算符
    & 按位与运算符，都为1时等于1，否则为0；
    | 按位或运算符，有一个为1时等于1；
    ~ 按位异或运算符，两对应的二进位相异时时等于1；
    << 左移动运算符，高位丢弃，低位补0；
    >> 右移动运算符；a >> 2 按右边的数字移动位数
    and、or、not、in、not in、is、is not

    if
        flag = False
        name = 'luren'
        if name == 'python':         # 判断变量是否为 python
            flag = True              # 条件成立时设置标志为真
            print 'welcome boss'     # 并输出欢迎信息
        else:
            print name               # 条件不成立时输出变量名称
    while
        count = 0
        while (count < 9):
        print 'The count is:', count
        count = count + 1
    for
        for letter in 'Python':     # 第一个实例
        print("当前字母: %s" % letter)

    break、continue、pass
```

## 时间

```python
import time
```

## 函数

```python
 def 关键词开头
    def printme( str , age = 35, *vartuple):
    print str
    return

    printme()
```

## 文件操作

```python
    + 模块
        - from modname import name1[, name2[, ... nameN]]
        - dir()函数 返回一个模块里定义的所有模块
            import math
            content = dir(math);print content;
        - globals() 和 locals()
        - reload(module_name)
    + 文件I/O
        - 键盘
            + str = raw_input("请输入：")标准输入读取一个行
            + str =  input("请输入：")跟上面类似，但是 input 可以接收一个Python表达式作为输入
        - 文件
            + fileObject=open(file_name [, access_mode][, buffering])
                - fileObject
                    + mode
                    + name
                    + closed
                    + close()
                    + read([size])
                    + write(str)
    + os 模块处理文件和目录
```

## 异常处理

```python
    try:
    <语句>        #运行别的代码
    except <名字>：
    <语句>        #如果在try部份引发了'name'异常
    except <名字>，<数据>:
    <语句>        #如果引发了'name'异常，获得附加的数据
    else:
    <语句>        #如果没有异常发生

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-

    # 定义函数
    def temp_convert(var):
        try:
            return int(var)
        except ValueError, Argument:
            print "参数没有包含数字\n", Argument

    # 调用函数
    temp_convert("xyz")

    错误信息
```

## 对象

```python
    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    class Parent:
        __secretCount = 0   # 私有变量，双下划线
        publicCount  = 0    # 公开变量
        def __init__(self, name, salary): #构造函数
            self.name = name
            self.salary = salary
            Parent.publicCount  += 1
        def displayParent(self):
            print "Name : ", self.name,  ", Salary: ", self.salary,"Total Parent %d" % Parent.publicCount

    #继承class 派生类名(基类名)   class SubClassName (ParentClass1[, ParentClass2, ...])
    class Child(Parent): # 定义子类
        def __init__(self):
            print "调用子类构造方法"

        def childMethod(self):
            print '调用子类方法'

    c1 = Child("Zara", 2000)
    c2 = Child("Manni", 5000)
    c1.displayParent()
    c2.displayParent()
    print "Total Parent %d" % Child.publicCount
```

## 正则、多线程

```python
import re
import thread
```

## 框架

```
django
```
