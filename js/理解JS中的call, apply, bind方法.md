# 理解JS中的 call, apply, bind方法

## call, apply, bind 方法的目的和区别

我们常说，call(), apply(),bind()方法的目的都是为了改变函数运行时的 this 的指向。

首先，this 到底是什么呢？
下面列表粗略介绍了词法作用域和动态作用域的区别。虽然 JS 中并不具有动态作用域。但是 this 的机制却和动态作用域很像，因此，我们也是通过在调用函数的时候，间接调用 call, apply,bind 这三个方法。来改变函数运行的上下文。除此之外，我们还有很多别的方式来确定 this 的指向。

| 作用域名   | 区别                                       |
| ---------- | ------------------------------------------ |
| 词法作用域 | 写代码或者定义时确定的，关注函数在何处声明 |
| 动态作用域 | 在运行时确定的，关注函数从何处调用         |

## call apply bind 方法区别

1. call， apply 方法比较类似，只有在传递参数和性能上有一点区别。

```javascript
const name = 'Jerry'；
const me = {
    name: 'Emon',
  };

function introduce(habbit1, habbit2) {
 console.log(`My name is ${this.name}, I like ${habbit1}, ${habbit2}`);
}
introduce('basketball', 'football'); // My name is Jerry, I like basketball, football
```

2. call 方法

```javascript
theFun.call(thisArg, arg1,arg2,...); //调用 theFun 时，this 指向 thisArg, "arg1,arg2,..."为传给 theFun 的参数
```

```javascript
introduce.call(me, "coding", "sleeping"); //My name is Emon, I like coding, sleeping
```

我们还可以用 ES6 的解构赋值方法来传参：

```javascript
theFun.call(thisArg, ...[arg1,arg2,...]);// 将参数"[arg1,arg2,...]"通过展开语法(Spread syntax)"..."来展开，再进行传参
```

```javascript
introduce.call(me, ...["coding", "sleeping"]); //My name is Emon, I like coding, sleeping
```

3. apply 方法:

```javascript
theFun.apply(thisArg, [arg1,arg2,...]); //传给theFun参数的方式是通过数组" [arg1,arg2,...]"来传参
```

```javascript
introduce.apply(me, ["coding", "sleeping"]); //My name is Emon, I like coding, sleeping
```

4. bind 方法

bind()和 call()在传参上面一样。但区别是：call()是返回函数调用的结果，而 bind()是返回一个绑定好 this 的函数。
我常用bind方法的时候就是在

```html
 <button id="bind-button">bind Fun</button>
  const bindButtonDom = document.getElementById("bind-button");
  bindButtonDom.addEventListener(
    "click",
    introduce.bind(me, "bind function", "sleeping") // bind方法本身就return一个绑定好this的方法
  );
```
