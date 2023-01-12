# JavaScript 怎么获取上传文件的大小
## 需求描述
在通过`input`标签上传文件之后，分别根据文件大小，以`Bytes`, `KB`, `MB`,`GB`为单位进行显示。

## 代码实现
1. 我们通过`input`标签拿到文件之后，可以通过`$event.target.files[0].size`拿到上传的文件大小
，默认为Byte单位的。

2. 通过单位换算，可以根据文件大小，以`Bytes`, `KB`, `MB`,`GB`为单位进行显示。

HTML部分

JavaScript部分