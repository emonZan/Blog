# CSS实现三栏布局的3种方式

## 需求
假设我们有如下`html`代码，要求实现三栏布局。其中，`center`需要放在中间。

```html
<div class="column-container">
      <div class="center">center</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <style>
  .column-container > * {
    height: 200px;
    background-color: lightslategrey;
    text-align: center;
  }
</style>
```

最简单是方式是用flex或者grid。他们被设计出来的目的就是应付这类场景的。

## grid实现

