# JavaScript 中的类型转换

## JavaScript 基本数据类型

JavaScript 中的一共有 8 中内置类型。分为**原始类型(Primitive values)**和**对象类型(objects)**

### 原始类型(Primitive values)

- 布尔值 （Boolean）
- 空值 (Null)
- 未定义 (Undefined)
- 数字 (Number)
- 长整型 (BigInt, ECMAScript 2020 新增)
- 字符串 (String)
- 符号 (Symbol, ECMAScript 2015 新增)

### 对象类型(Objects)

简单可以理解为：`new Object`，`new Array`，`new Map`，`new Set`，`new WeakMap`，`new WeakSet`，`new Date`，和几乎所有通过 new `keyword` 创建的东西。

### Typeof 操作符

typeof 操作符的目的就是检查数据类型。但是对于从 Object 派生出的结构类型。
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
| 其他 Object   | 'object'        |

### typeof Null

我们自己在本地尝试`typeof null;`会发现返回结果竟然是`'object'`。这其实是一个历史遗留的 bug。因为 JavaScript 在最初设计的时候，是通过 32bit 单元来存储数组的。这里面存储的数据，都由一个 type tag（1-3bits）和 value 构成。type tag 都是存储在低位。它对应的数据可以参考下面这个表：
| type tag | 类型 |
| -------- | ------- |
| 000 | object |
| 1 | int |
| 010 | double |
| 100 | string |
| 110 | boolean |

对于引用类型 object，type tag 对应的是`0`。然而对于 Null 类型，机器码是空指针(在大多数平台中是`0x00`)，正好也是 0。而 JavaScript 里面的 typeof 方法，是没有过滤 Null 类型的。因此，我们`typeof null`的时候，会认为它的 type tag 是 0，就得到`'object'`。

### 类型转换
将值从一种类型转换为另一种类型通常称为类型转换(type casting)。它分为显式类型转换和隐式类型转换，也称强制类型转换(coercion)。

我们常用到的显示类型转换方式有三种

1. 转换成字符串
   - 全局方法 String(), 它可用于任意类型的数字、文字、变量或表达式
   - 一些类型的 toString()方法
2. 转换为数值
   - 全局方法 Number() 可把字符串，布尔值，Date 类型转换为数字。空的字符串转换为 0， 其他字符串将转换为 NaN
3. 转换为对象
   Object


#### JavaScript 类型转换表

| 原始值            | 转换为数字 | 转换为字符串      | 转化为布尔值                                       |
| ----------------- | ---------- | ----------------- | -------------------------------------------------- |
| false             | 0          | 'false'           | false                                              |
| true              | 1          | 'true'            | true                                               |
| 0                 | 0          | '0'               | false                                              |
| 1                 | 1          | '1'               | true                                               |
| '0'               | 0          | '0'               | true(不是空的 string 类型转化为 boolean 都是 true) |
| '000'             | 0          | '000'             | true                                               |
| '1'               | 1          | '1'               | true                                               |
| NAN               | NAN        | 'NAN'             | false                                              |
| Infinity(正无穷)  | Infinity   | 'Infinity'        | true                                               |
| -Infinity(负无穷) | -Infinity  | '-Infinity'       | true                                               |
| ''                | 0          | ''                | false                                              |
| '10'              | 10         | '10'              | true                                               |
| 'twenty'          | NAN        | 'twenty'          | true                                               |
| []                | **0**      | ''                | true                                               |
| [10]              | **10**     | '10'              | true                                               |
| [10,20]           | NAN        | '10, 20'          | true                                               |
| ['ten']           | NAN        | 'ten'             | true                                               |
| function(){}      | NAN        | 'function(){}'    | true                                               |
| {}                | NAN        | '[object Object]' | true                                               |
| null              | 0          | 'null'            | false                                              |
| undefined         | NAN        | 'undefined'       | false                                              |
