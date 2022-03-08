# JS 实现 Angular slider 组件

## 需求描述

1.  需求：根据传入的动态数组生成一个节点数为数组长度的 slider 组件。要求节点直接长度一致，但是显示的值为传入数组的值。
2.  示例：
    传入值为[5], 因为只有一个值，slider 无法拖动，显示如下
    传入值为[5，10，20，30，40，50，55]， 数值之间差值不一定相等，显示如下
3.  实现逻辑：
    UI：
    先画一条线作为滑动条，再根据传入数组长度来动态生成相应节点数, 通过`滑动条线的长度÷数组长度`来动态生成节点之间宽度。 把生成的点覆盖在线上面，最后进行分段。

## Demo

![slider-demo](../assets/images/slider-component.gif)

## 意外处理

#### 问题：

在实现过程中，有遇到一个问题：在父组件页面还没有加载完的时候，已经在执行 slider 组件的`initDynamicMargin()`方法。 此时，无法拿到 slider 宽度，来计算相应的`dotMargin`

#### 解决办法：

通过`Promise`来写一个`waitElement()`方法，等页面 slider 加载完成之后，再去计算节点之间的宽度。

#### 代码实现如下：

```javascript
  private waitElement(selector: string) {
    return new Promise<void>((resolve) => {
      if (document.querySelector(selector)) {
        resolve();
      }
      const observer = new MutationObserver((mutations) => {
        if (document.querySelector(selector)) {
          resolve();
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }

    ngAfterViewInit() {
    // Fix issue: Calculate dotmargin before loaded
    this.waitElement('#container').then(() => {
      this.initDynamicMargin();
    });
  }
```

## Github 地址

https://github.com/emonZan/angular-slider-conponent
