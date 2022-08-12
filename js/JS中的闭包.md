# 理解 JavaScript 中的闭包

任何一个 JavaScript 开发都可能被问过一个问题: **什么是 JS 的闭包?**。这就像是被问“你从哪里来？”一样，让人不知道怎么回答。这篇文章就尝试用我们常见的代码来举例，去理解闭包。

首先，我要明白的是，闭包是基于`词法作用域`来写代码的时候所产生的自然结果，你甚至不需要为了用到它而有意识地创建闭包。
我们会通过以下三个问题，层次递进地来进一步了解闭包。

1. 什么是闭包？
2. 为什么要用到闭包？
3. 什么情况会需要它？

## 什么是闭包(Closure)

闭包并不是 JS 特有的概念。事实上，它是一个数学构造，这个概念是在 1960 年代为采用 lambda 演算的表达式的机器求值而开发的。之后，在 1970 年代首次在编程语言中实现。

**闭包在实现上是一个结构体，它存储了一个函数（通常是其入口地址）和一个关联的环境。**

而对于 JS 中闭包的实现，简单地说，它有如下两个特征：

1. 必须有外部的封闭函数。
2. 封闭函数必须返回至少一个内部函数。

用通俗的话来讲：当父母一个房子，也有一个孩子。房子虽然是父母的，但是孩子也能住在那里。当别人问孩子“你家在哪里？”， 孩子会指向他家的方向，虽然那并不是他的房子，而是他父母的。“闭包”也就是指孩子总是能够(即使在国外)说自己有家，即使房子实际上是父母的。
这里的父母，就是指外部函数。孩子等于内部函数。而房子则表示的是词法作用域。

```javaScript
function getSecretNum(studentList) {
 const secret = Math.trunc(Math.random() * 100); // 在getSecretNum函数中初始化一个约束变量secret，它只能被getSecretNum函数和它内部的inner函数所访问
  return function inner() {
    console.log(`The secret number is ${secret}.`)
  }
}
const consoleSecretNumFun = getSecretNum(); // 一般来说，在getSecretNum调用之后，它的作用域会被销毁， secret变量所占用的内存也会被回收。
consoleSecretNumFun() // 通过调用consoleSecretNumFun函数，我们仍然可以访问secret这个私有变量
```

输出

```javaScript
The secret number is 44. //这里44是随机的。
```

## 闭包的作用

### 私有变量

通过上面的例子我们可以发现：

1. 在没有闭包的语言中，变量的生命周期只限于创建它的环境。
2. 但在有闭包的语言中，只要有一个闭包引用了这个变量，它就会一直存在。它占用的资源不会被垃圾回收机制（GC）所回收。
   在 2015 年以前，JS 没有`let`, `const`这样的语法。那时候当你需要访问到一个变量，又不希望把这个变量放到全局作用域中，因为它很可能被别的方法所污染。
   这时候我们就需要闭包了。

下面我用我们 Web 开发过程中真实可能遇到的情况来举例。

### 面向事件编程
我们也可以不在外部函数中定义`约束变量`，而是传入一个`自由变量`。


```JavaScript
function makeSizer(size) {
    return function() {
    document.body.style.fontSize = size + 'px';
    };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
```
## 闭包的坏处


## 参考文章

- 《你不知道的 JavaScript》
- [how-do-javascript-closures-work](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work)
