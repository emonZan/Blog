# px, em, rem 的区别和使用场景

## 区别

CSS 中，目前我们常用到的长度单位有 px, em, rem。

### 绝对长度单位

px（pixel 像素）： 相对于显示设备而言的。对于低 dpi 设备，1px 是显示的一个设备像素(点)。对于打印机和高分辨率屏幕，1px 意味着多个设备像素。

**特点：**

- 使用时间长， 而且比较直观。

### 相对长度单位

1. em： 相对于元素的字体大小.目前浏览器默认的字体大小是 16px

2. rem: 相对于根元素的字体大小

   **特点：**

- rem 和 em 作为相对长度单位。他们的大小都不是固定的，会根据参照物的大小而动态变化。
- rem 相对 em 来说，计算的参照物只有一个：根元素（\<html\>），这样大大减小了计算成本。

比如说下面两个例子。分别计算出 grandson 的字体大小。

```html
<div class="father">
  father font size
  <div class="child">
    child font size
    <div class="grandson">grandson font size</div>
  </div>
</div>
```

用 em 的是`1.2*1.2*1.2 = 1.728em = 1.728*16px`算起来就比较麻烦。

```css
.father {
  font-size: 1.2em;
}
.child {
  font-size: 1.2em;
}
.grandson {
  font-size: 1.2em;
}
```

用 rem 的就直接是是`1.2rem = 1.2*16px`，相对比较直观一些。

```css
.father {
  font-size: 1.2rem;
}
.child {
  font-size: 1.2rem;
}
.grandson {
  font-size: 1.2rem;
}
```

## 适用场景

px:

1. 目前，我们浏览器现在的缩放都是通过 zoom 缩放，而不是改变文本大小。缩放的时候，用 px 的字体也会跟着一起缩放。所以做一些不需要支持移动端的网站可以用 px.
2. 如果需求给的设计稿上就要求详细的 px 长度。比如说一些 boreder，image, icon。

em, rem：

1. 它们是专门为可伸缩布局创建的。有些人喜欢把手机上的默认字体调大，这时候，浏览器的默认字体也会跟着变大。
2. 方便适配各种分辨率的设备。
