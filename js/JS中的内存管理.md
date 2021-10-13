# 理解JavaScript中的内存管理（Memory Management）

平时写JavaScript代码时候，我们很少会考虑到内存管理（Memory Management)的问题，因为JS已经帮我们做了这些事情：
   1. 创建变量（对象，字符串等）时自动进行了分配内存。
   2. 对不再使用的变量“自动”释放，也称垃圾回收（garbage collection）。
然而，理解JS的内存管理，有助于写出更高效的代码。

## JavaScript内存中的堆和栈
栈（stack）：栈是JavaScript用来存储静态数据的数据结构。静态数据是引擎在编译时知道其大小的数据。在JavaScript中，这包括7种原始值(Primitive values)(string, number, boolean, bull, undefined, bigInt, symbol)和指向对象和函数的引用。
栈的特点：

堆(heap)：栈是一个不同的存储数据的空间，JavaScript在这里存储对象和函数。
堆的特点：

## 内存生命周期


## 垃圾回收机制

## 内存泄漏

### 解决办法

## 参考链接
https://felixgerschau.com/javascript-memory-management/#memory-life-cycle

https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec
