# 理解 JavaScript 中的内存管理（Memory Management）

平时写 JavaScript 代码时候，我们很少会考虑到内存管理（Memory Management)的问题，因为 JS 已经帮我们做了这些事情：

1.  创建变量（对象，字符串等）时自动进行分配内存。
2.  对不再使用的变量“自动”释放，也称垃圾回收（garbage collection）。

    然而，理解 JS 的内存管理，可以在我们遇到内存泄漏问题的时候及时解决，也有助于我们写出更高效的代码。

## 什么是内存

从计算机硬件层面来说，内存是计算机的重要部件之一，它是 CPU 能直接寻址的存储空间。计算机中所有程序的运行都是在内存中进行的。

### 堆内存和栈内存

**栈内存（stack memory：**
栈是 JavaScript 用来存储静态数据的数据结构。静态数据是引擎在编译时知道其大小的数据。在 JavaScript 中，这包括 7 种原始值(Primitive values)(string, number, boolean, bull, undefined, bigInt, symbol)和指向对象和函数的引用。

特点：

1. 栈内存给每个变量分配的内存空间是固定的。也就是说，栈上分配的空间是在编译时由编译器设置的（这个过程也称为“静态内存分配（static memory allocation）”），在程序执行时不会改变。
2. 栈内存的大小也是有限的。
3. 后进先出，存取速度相对于堆内存，更快。

**堆内存(heap memory)：**
栈是一个不同的存储数据的空间，JavaScript 在这里存储对象和函数。

特点：

1. 堆内存的大小是在编译过程中动态分配的，这个过程也称“动态内存分配（dynamic memory allocation”
2. 要注意的是，堆内存和数据结构中的堆完全是两码事，分配方式倒是类似于链表。具体可以参考[What's the relationship between "a" heap and "the" heap?](https://stackoverflow.com/questions/756861/whats-the-relationship-between-a-heap-and-the-heap)
3. 存取速度相对比较慢

**静态内存分配&动态内存分配：**

| 静态内存分配             | 动态内存分配                               |
| ------------------------ | ------------------------------------------ |
| 编译时知道内存大小       | 编译时不知道内存大小，在程序运行时按需分配 |
| 编译时进行分配           | 程序运行时进行分配                         |
| 分配栈内存               | 分配相应的堆内存                           |
| FILO(first-in, last-out) | 分配没有特定顺序                           |

## 内存生命周期

内存的生命周期和我们生活中使用工具的情况很像，都是拿，用，还这三个流程。

1.  按需分配内存（Allocate memory)
    分配内存发生在我们初始化一个变量的时候。
2.  使用分配的内存，进行读/写操作（Use memory）
3.  不再需要的时候，释放内存(Release memory)
    当内存不在需要使用的时候，就要进行释放（Release）但是 JS 不像 C 语言,可以通过`malloc()` 和 `free()`函数来进行内存管理，JS 需要依赖“垃圾回收机制”来释放内存

```javascript
var n = 12; // 给Number类型变量n分配栈内存
var o = {
  name: "Emon",
  job: "developer",
}; // 给对象类型变量o分配堆内存进次存储，并把对o的引用存储到栈内存中
```

## 垃圾回收(Garbage collection)


## 内存泄漏

### 解决办法

## 参考链接

https://felixgerschau.com/javascript-memory-management/#memory-life-cycle
https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec
