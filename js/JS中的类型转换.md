# JavaScript中的类型转换

## JavaScript基本数据类型
JavaScript中的基本数据类型分为**原始类型(Primitive values)**和**对象类型(objects)**

### 原始类型(Primitive values)
+ Boolean type
+ Null type
+ Undefined type
+ Number type
+ BigInt type (ECMAScript 2020 新增)
+ String type
+ Symbol type(ECMAScript 2015 新增)

### 对象类型(Objects)
简单可以理解为：`new Object`，`new Array`，`new Map`，`new Set`，`new WeakMap`，`new WeakSet`，`new Date`，和几乎所有通过 new `keyword` 创建的东西。

### Typeof 操作符
typeof操作符的目的就是检查数据类型。但是对于从Object派生出的结构类型。
比如说`const a = new Date(); typeof a // 依旧会返回object`。

我们可以参考这个表:

| 类型          | typeof 返回结果 |
| ------------- | --------------- |
| Undefined     | 'undefined'     |
| Null          | 'object'        |
| Boolean       | 'boolean'       |
| Number        | 'number'        |
| BigInt        | 'bigint'        |
| String        | 'string'        |
| Symbol        | 'symbol'        |
| Function 对象 | 'function'      |
| 其他Object    | 'object'        |

### typeof Null
我们自己在本地尝试`typeof null;`会发现返回结果竟然是`'object'`。这其实是一个历史遗留的bug。因为JavaScript在最初设计的时候，是通过32bit单元来存储数组的。这里面存储的数据，都由一个type tag（1-3bits）和value构成。type tag都是存储在低位。它对应的数据可以参考下面这个表：
| type tag | 类型    |
| -------- | ------- |
| 000      | object  |
| 1        | int     |
| 010      | double  |
| 100      | string  |
| 110      | boolean |

对于引用类型object，type tag对应的是`0`。然而对于Null类型，机器码是空指针(在大多数平台中是`0x00`)，正好也是0。而JavaScript里面的typeof方法，是没有过滤Null类型的。因此，我们`typeof null`的时候，会认为它的type tag是 0，就得到`'object'`。

### 类型转换
我们常用到的类型转换方式有三种
1. 转换成字符串
   - 全局方法 String(), 它可用于任意类型的数字、文字、变量或表达式
   - 一些类型的toString()方法
2. 字符串转换为数值
   - 全局方法 Number() 可把字符串，布尔值，Date类型转换为数字。空的字符串转换为 0， 其他字符串将转换为 NaN
   - 一元的 + 运算符可用于把变量转换为数字。但是这个方法可读性不高，一般用的比较少
3. 自动类型转换
   JavaScript 尝试操作一种“错误”的数据类型，它会试图将该值转换为“正确”的类型。

#### JavaScript 类型转换表
| 原始值            | 转换为数字 | 转换为字符串      | 转化为布尔值                                  |
| ----------------- | ---------- | ----------------- | --------------------------------------------- |
| false             | 0          | 'false'           | false                                         |
| true              | 1          | 'true'            | true                                          |
| 0                 | 0          | '0'               | false                                         |
| 1                 | 1          | '1'               | true                                          |
| '0'               | 0          | '0'               | true(不是空的string类型转化为boolean都是true) |
| '000'             | 0          | '000'             | true                                          |
| '1'               | 1          | '1'               | true                                          |
| NAN               | NAN        | 'NAN'             | false                                         |
| Infinity(正无穷)  | Infinity   | 'Infinity'        | true                                          |
| -Infinity(负无穷) | -Infinity  | '-Infinity'       | true                                          |
| ''                | 0          | ''                | false                                         |
| '10'              | 10         | '10'              | true                                          |
| 'twenty'          | NAN        | 'twenty'          | true                                          |
| []                | **0**      | ''                | true                                          |
| [10]              | **10**     | '10'              | true                                          |
| [10,20]           | NAN        | '10, 20'          | true                                          |
| ['ten']           | NAN        | 'ten'             | true                                          |
| function(){}      | NAN        | 'function(){}'    | true                                          |
| {}                | NAN        | '[object Object]' | true                                          |
| null              | 0          | 'null'            | false                                         |
| undefined         | NAN        | 'undefined'       | false                                         |
