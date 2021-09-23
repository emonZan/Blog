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

我们自己在本地尝试`typeof null;`会发现返回结果竟然是`'object'`。这其实是一个历史遗留的 bug。因为 JavaScript 在最初设计的时候，是通过 32bit 单元来存储数组的。这里面存储的数据，都由一个`type tag（1-3bits`和`value`构成。`type tag` 都是存储在低位。它对应的数据可以参考下面这个表：
| type tag | 类型    |
| -------- | ------- |
| 000      | object  |
| 1        | int     |
| 010      | double  |
| 100      | string  |
| 110      | boolean |

对于引用类型 `object`，`type tag` 对应的是`0`。然而对于 Null 类型，机器码是空指针(在大多数平台中是`0x00`)，正好也是 `0`。而 JavaScript 里面的 `typeof` 方法，是没有过滤 Null 类型的。因此，我们`typeof null`的时候，会认为它的 `type tag` 是 `0`，就得到`'object'`。

### 类型转换

将值从一种类型转换为另一种类型通常称为类型转换(type casting)。它分为显式强制类型转换(explicit coercion)和隐式强制类型转换(implicit coercion)。

#### 显式强制类型转换(explicit coercion)

我们最常用到的显示类型转换方式有四种

1. 转换成字符串
   - `String()`, 它可用于任意类型的数字、文字、变量或表达式
   - 除了`null`和`undefined`之外的任何值都有的 `toString()`方法
2. 转换为数值
   - `Number()`可把字符串，布尔值，Date 类型转换为数字。空的字符串转换为 `0`， 其他字符串将转换为 `NaN`
   - `parseInt(string, radix)`, `parseFloat(string, radix)`函数会解析字符串中的数字。ES5 之后。radix 默认为 10 进制。
3. 转换为对象
   - `Object()`
4. 转换为布尔值
   - `Boolean()`
   - 使用`!!`(也可以理解为隐式类型转换)

#### 隐式强制类型转换(implicit coercion)

隐式类型转换是指的那些隐蔽的强制类型转换。

我们写代码大都是给别人看的，显示强制类型转换旨在让代码更加清晰易懂。而隐式强制类型转换的目的是减少冗余，让代码更整洁。相对的，它的副作用就是让代码比较晦涩难懂。
但这个副作用也是相对而言的。比如说如下代码：

```javascript
var a = 10;
var b = a + ""; // 隐式强制类型转换
var b = String(a); // 显示强制类型转换
```

如果你理解`a + ''`的意思，那么“隐藏的副作用”对你来说就不明显。不过我们也要顾及其他不同水平的开发人员，考虑到别人是否能读懂自己的代码。这些可以根据实际工作情况做出选择，尽量让整体代码兼顾“简洁”和“可读性”。

我们目前常用到的会产生隐式强制类型转换的操作有以下三种：

1. number 和 string 之间的隐式强制类型转换
2. number 和 boolean
3. boolean 的隐式强制类型转换，包含一下情况中的条件判断表达式
   - `if()`
   - `for(..;..;..;)`中的第二个表达式
   - `while()`和 `do..while(..)`
   - 三元运算符`? :`
   - 逻辑运算符`||`和`&&`

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
