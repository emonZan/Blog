#JavaScript数组去重方法

## 数组去重
在处理数据的时候，常常需要对数组进行去重操作。这里记下最常用的三种方法。


## 1. ES6中新增的`Set()`构造函数和`...`展开语法
`Set`是JavaScript标准内置对象，它是ES6(ES2015)里新增的对象。这个对象允许呢存储任何类型的唯一值，无论是原始值或者是对象引用。我们可以利用它这个特性，用构造函数`Set()`来对数组进行去重操作。
````
const arr = ['A', 'B', 'C', 'A', 'B'];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);
````
输出:
`['A','B','C']`


## 2. 使用数组的indexOf()和filter()方法
`indexOf()`方法会返回数组中可以找到一个给定元素的第一个索引，如果没有，则返回-1。
对于数组中有重复元素的情况，可以结合这一特性，通过filter来遍历数组，根据以下代码来过滤掉重复元素。
```
const arr = ['A', 'B', 'C', 'A', 'B'];
const uniqueArr = arr.filter((item, index) => index === arr.indexOf(item));
console.log(uniqueArr);
```
输出:
`['A','B','C']`

indexOf()方法在这里是为filter()方法提供判断条件。同理，我们也可以用其他的方式来进行判断。


## 3. 使用数组的forEach()和includes()方法
这个方法是先初始化一个空数组，用forEach()遍历原数组，然后将字段一个一个push进去。

```
const arr = ['A', 'B', 'C', 'A', 'B'];
arr.forEach(i => {
    if (!uniqueArr.includes(i)) { uniqueArr.push(i) }
});
console.log(uniqueArr);
```
输出:
`['A','B','C']`

这里用`includes()`来判断`uniqueArr`里是否已经有这个字段，你也可以用`indexOf()`或者其他方式来判断。

