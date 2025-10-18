module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Отключаем secure cookies для всех запросов
    ctx.cookies.secure = false;
    ctx.cookies.httpOnly = false;
    ctx.cookies.sameSite = 'none';
    
    await next();
  };
};
