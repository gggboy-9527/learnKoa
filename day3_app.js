'use strict';
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
var Koa = require('koa');

// 创建一个Koa对象表示web app本身
var app = new Koa();
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});
// 监听3000端口
app.listen(3000);
console.log('app started at port 3000...');
