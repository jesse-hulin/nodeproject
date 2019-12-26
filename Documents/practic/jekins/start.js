// 创建一个服务
let Koa = require("koa");
let app = new Koa();
let router = require("./routes/index");

// app.use(async (ctx, next) => {
//   console.log(ctx);
//   ctx.response.type = 'text/html';
//   ctx.response.body = '<h1>Hello, koa2!</h1>';
//   await next();
// });
app.use(router);
app.listen(3000, () => {
  console.log("服务启动");
});
