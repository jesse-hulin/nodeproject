let f1 = async (ctx, next) => {
  ctx.response.body = '首页';
  await next();
};

module.exports = {
  'GET /': f1
};
