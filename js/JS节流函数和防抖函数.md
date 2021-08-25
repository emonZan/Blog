JS 实现节流函数,防抖函数

1. 节流函数（throtting fountion）和防抖函数（debouncing fountion）都是为了实现一个目的：减少方法被调用的次数，提高网站效率。
   常用于处理一些会被频繁触发的事件， 比如说`keydown, keyup, click, mousemove, resize`等等。
2. 节流函数（throtting founction）
   举例子说，你在嗑瓜子，每次你都会把瓜子壳扔在地上，而扫地机器人则负责扫地。扫地机器人每过 10 分钟才会转回你丢瓜子壳的区域，进行清扫。当它执行完之后，就离开了，可能去厨房打扫了。这时候，无论你继续丢多少瓜子壳，扫地机器人都不会过来，直到过了 10 分钟之后。
3. 防抖函数
   依旧是你在嗑瓜子，但是这次是你妈妈在帮你扫地，她告诉你，等你 10 分钟嗑完手里的一把瓜子后叫她，她才会慢悠悠过来帮你扫掉。之前无论你叫她多少次，她听到了，但并不想理你。
   - 代码实现

```javascript
const debounceFun = (fun, delay) {
       clearTimeout(timeId);
       timeId = setTimeout(fun, delay);
   }
```
 - 用户输入搜索功能实现

4. Throttling 和 debouncing 的区别是：Throttling 是无论事件触发多少次，它只会定期执行。而 Debouncing 是会在指定的时间周期结束的时候执行。
   参考：
   https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086
   https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript
