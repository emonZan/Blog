# JavaScript 怎么获取上传文件的大小
## 需求描述
在通过`input`标签上传文件之后，分别根据文件大小，以`Bytes`, `KB`, `MB`,`GB`为单位进行显示。

## 代码实现
1. 我们通过`input`标签拿到文件之后，可以通过`$event.target.files[0].size`拿到上传的文件大小
，默认为Byte单位的。

2. 通过单位换算，可以根据文件大小，以`Bytes`, `KB`, `MB`,`GB`为单位进行显示。

HTML部分
```html
    <input type="file" id="file">
    <p id="file-size-text">File size:</p>
```
JavaScript部分

```javascript
    var fileInputDom = document.getElementById('file');
    fileInputDom.addEventListener('change', (event) => {
        fileChange(event);
    })

    function fileChange($event) {
        if ($event.target.files.length) {
            const sizeStr = calFileSize($event.target.files[0].size);
            const fileText = document.getElementById('file-size-text');
            fileText.textContent = `File size: ${sizeStr}`;
        }

    }

    function calFileSize(sizeInBytes) {
        //  初始化单位数组
        const fileSizeExt = new Array('Bytes', 'KB', 'MB', 'GB');
        let i = 0;
        // 当文件大小大于1024个字节时，进行循环处理
        while (sizeInBytes > 1023) {
            sizeInBytes /= 1024;
            i++;
        }
        // 返回小数点两位的文件大小
        return ((Math.round(sizeInBytes * 100) / 100) + ' ' + fileSizeExt[i]);
    }
```