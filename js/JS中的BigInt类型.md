# JavaScript中的BigInt类型
## Number的安全范围
在ES2020之前，JavaScript只有一种数值类型：number(数字)。和别的强类型编程语言(比如说C，Java)不同，JavaScript不区分整数值和浮点数值。
我们可以发现`10 === 10.0 // true`。
它的数字类型是基于IEEE 754标准中的“双精度”格式，也就是64位二进制来实现的。
这里可以提到的的一点是：
JavaScript的数字格式也就决定了JavaScript能够表示的整数范围是-
## BigInt类型
JavaScript在ES2020中引入了`BigInt`类型
