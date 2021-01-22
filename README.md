TypeScript Integration Snowpack React "fast-refresh" Demo
=================================

有时候我们需要在某个已有网站系统中，以hack的方式嵌入一些javascript。可以利用snowpack的功能，实现嵌入之后依然可以fast refresh

本demo的`public`中，使用`http-server`模拟一个第三方系统，我们自己代码放在src中用snowpack管理。
只要想办法在`public/index.html`中嵌入一些必须的代码（从之前snowpack别处生成的代码）来建立起双方的连接，即可实现react的fast refresh

```
npm install
npm run demo
```

It will open page on browser automatically.
