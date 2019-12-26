let f2 = async (ctx, next) => {
  ctx.response.body = '登录页';
  await next();
};
module.exports = {
  'GET /login': f2
};
