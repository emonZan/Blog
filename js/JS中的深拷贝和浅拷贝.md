# JavaScript 中的深拷贝和浅拷贝

## JavaScript 内存中的堆和栈

**栈（stack）**：堆是 JavaScript 用来存储静态数据的数据结构。静态数据是引擎在编译时知道其大小的数据。截止 ES2021, 在 JavaScript 中，这包括 7 种原始值(Primitive values)(string, number, boolean, bull, undefined, bigInt, symbol)和指向对象和函数的引用。

**堆(heap)**：堆是一个不同的存储数据的空间，JavaScript 在这里存储对象和函数。

## 定义

将一变量的值赋值给另一个变量，相当于在栈内存中创建了一个新的内存空间，然后从栈中复制值，存储到这个新空间中。

    1. 对于基本类型，栈中存储的就是它自身的值，所以新内存空间存储的也是一个值。直接改变新变量的值，不会影响到旧变量的值，因为他们值存储的内存空间不同。
    因此将基本变量 a 的值复制给另一个变量 b 时，改变 b 的值并不会影响原来的变量 a 本身的值。

    2. 对于引用变量，栈中主要存储它所引用的对象的地址。
    因此，将引用变量a的值复制给另一个变量b时，实际上a和b都是指向堆中同一个内存地址。因此改变b的值，相当于改变b指向的堆中的值，因此a也会随之改变。

所以我们一般谈深拷贝和浅拷贝都是针对于引用类型而言的。因为针对值类型，它的拷贝结果都是深拷贝。

**浅拷贝（shallow copy）**：当将旧引用变量的值赋给新引用变量时，将旧引用变量中存储的地址复制到新引用变量中。这意味着旧的和新的引用变量都指向内存中的相同对象。因此，如果对象的状态通过任何一个引用变量发生变化，它就会同时反映这两个变量。

**深拷贝（deep copy）**：深拷贝会复制旧对象的所有成员，为新对象分配单独的内存位置，然后将复制的成员分配给新对象。这样，两个对象都是相互独立的，如果对其中一个进行任何修改，另一个对象也不会受到影响。

**简而言之，如果把对象 a 复制给另一个对象 b，如果修改 b，a 也随之改变了，就是浅拷贝。相反，如果 a 维持原始值，则是深拷贝。**

## 浅拷贝实现

先声明如下一个引用类型对象`person`：

```javascript
let person = { name: "Emon", job: "developer" };
```

    1. 直接赋值

```javascript
let shallowCopyPerson = person;
```

    2. Object.assign(target)

    `Object.assign(target, source1, source2...)`原本是将所有可枚举属性的值从一个或多个源对象分配到目标对象。返回目标对象。
    通常用法：

```javascript
const targetObj = { a: 1, b: 2 };
const sourceObj = { c: 3, d: 4 };
Object.assign(targetObj, sourceObj); // {a: 1, b: 2, c: 3, d: 4}
console.log(targetObj); //{a: 1, b: 2, c: 3, d: 4}
```

    这里我们可用用来复制对象：

```javascript
let shallowCopyPerson = Object.assign(person);
```

    1.  遍历赋值，这种方式虽然把对象进行了遍历，但是本质还是复制的是对象的引用。

这几个的复制的结果都是复制的都是对指针的复制，因此改变`shallowCopyPerson`的属性后，原来对象`person`的属性也会随之改变，结果如下：

```javascript
shallowCopyPerson.name = "lucy"; // 改变复制后的值
console.log(shallowCopyPerson); // {name: 'lucy', job: 'developer'} 复制对象发生改变。
console.log(person); // {name: 'lucy', job: 'developer'} 注意目标对象自身也会改变。
```

## 深拷贝实现

其实有很多方法可以实现深拷贝，这里我们简单介绍几种比较方便高效的。

1. Object.assign({}, source);
   这个方法是和上面的浅拷贝实现稍有区别，他把 target 设置为空对象，在将 source 对象传进去，实现了复制

```javascript
let deepCopyPerson = Object.assign({}, person);
```

2. ...拓展运算符（spread operator）

```javascript
let deepCopyPerson = { ...person };
```

3. JSON.parse/stringify
   这个方法的限制比较多，如果你需要拷贝的对象中没有`functions`, `undefined`, `Infinit`或者像`RegExps`, `Maps`, `Sets`, `Blobs`, `FileLists`, `ImageDatas`等比较复杂的类型。那么可以用这个方法。

```javascript
const a = {
  string: "string",
  number: 123,
  bool: false,
  nul: null,
  date: new Date(), // stringified
  undef: undefined, // lost
  inf: Infinity, // forced to 'null'
  re: /.*/, // lost, to {}
  fun: () => "hello world", // lost
};
```

4. 遍历赋值
   我们可以通过遍历原有对象，把里面的值一个一个重新赋值给新对象。

```javascript
let shallowCopyPerson = {};
for (const key in person) {
  shallowCopyPerson[key] = person[key];
}
```

5. `structuredClone()`方法
   这是 JS 官方定义的方法。不过遗憾的是，目前主流浏览器都不支持这个方法。可以参考[structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)获取最新的浏览器支持结果。

```javascript
const shallowCopyPerson = structuredClone(person);
```
