# JavaScript 中的深拷贝和浅拷贝

## JavaScript内存中的堆和栈
堆（stack）：堆是JavaScript用来存储静态数据的数据结构。静态数据是引擎在编译时知道其大小的数据。在JavaScript中，这包括7种原始值(Primitive values)(string, number, boolean, bull, undefined, bigInt, symbol)和指向对象和函数的引用。

栈(heap)：栈是一个不同的存储数据的空间，JavaScript在这里存储对象和函数。

## 定义

将一个变量的值赋值给另一个变量，相当于在栈内存中创建了一个新的内存空间，然后从栈中复制值，存储到这个新空间中。对于基本类型，栈中存储的就是它自身的值，所以新内存空间存储的也是一个值。直接改变新变量的值，不会影响到旧变量的值，因为他们值存储的内存空间不同。

因此将基本变量 a 的值复制给另一个变量 b 时，改变 b 的值并不会影响原来的变量 a 本身的值。而引用变量主要存储它所引用的对象的地址。

所以深拷贝和浅拷贝都是针对于引用类型而言的。

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

    2. Object.assign

    ```javascript
    let shallowCopyPerson = Object.assign(person);
    ```

    3.  遍历赋值，这种方式虽然把对象进行了遍历，但是本质还是复制的是对象的引用。
   
   
这几个的复制的结果都是复制的都是对指针的复制，因此改变`shallowCopyPerson`的属性后，原来对象`person`的属性也会随之改变，结果如下：

        ```javascript
        shallowCopyPerson.name = "lucy";
        console.log(person); // {name: 'lucy', job: 'developer'}
        console.log(shallowCopyPerson); // {name: 'lucy', job: 'developer'}
        ```

深拷贝实现
