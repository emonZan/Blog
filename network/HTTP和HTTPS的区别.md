# HTTP 和 HTTPS 的区别

## HTTP 简介

HTTP(**H**yper**T**ext **T**ransfer **P**rotocol)，又称为**超文本传输协议**。
1898 年，Tim Berners-Lee 在 CERN（欧洲核子研究组织）提出了一种能让远隔两地的研究者们共享知识的设想，也就是后来的万维网。HTTP 也由此开始发展。

## TCP/IP 协议族(TCP/IP Protocols)

### 简介

计算机和网络之间要实现信息传输，双方就要约定好通信的标准和方法。比如说怎么发起/结束通信，由那一边先发起，使用什么方法，什么语言等等。而这些为通信而制定的规则，我们称为协议（proticol）。TCP/IP 协议族（TCP/IP Protocol Suite，或 TCP/IP Protocols）则是这些网络传输协议家族的统称，这是因为协议族中的两个核心写于 TCP 和 IP，为该家族在最早通过的标准。

### 分层管理

TCP/IP 协议在一定程度上参考了 OSI 模型(Open System Interconnection Model)的体系结构。OSI 模型共有七层，从下到上分别是物理层、数据链路层、网络层、运输层、会话层、表示层和应用层。但是这显然是有些复杂的，所以在 TCP/IP 协议中，它们被简化为了四个层次，我们叫它 TCP/IP 模型，它也被看做简化的 OSI 模型。而 HTTP 协议就是位于应用层的一种协议。

| 层号 | 层次名                             | 封装单元 | 协议 |
| ---- | ---------------------------------- | -------- | ---- |
| 4    | 应用层(Application layer)          |          |      |
| 3    | 传输层(Transport layer)            |          |      |
| 2    | 网络层(Internet layer)             |          |      |
| 1    | 网络接口层（Network Access layer） |          |      |
| Row5 |                                    |          |      |

## HTTP 版本历史

### HTTP/0.9

### HTTP/1.0

### HTTP/1.1

### HTTP/2

### HTTP/3

## HTTP 缺点

1. HTTP 本身不具备加密功能，导致通信使用明文（不加密），内容可能会被窃听
2. 不验证通信方的身份，因此有可能遭遇伪装
3. 无法证明报文的完整性，所以有可能已遭篡改
   参考：《图解 HTTP》

## HTTPS

HTTPS(HTTP Secure)不是

## SSL

## 使用场景
