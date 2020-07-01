const koa = require('koa')
const koaStatic = require('koa-static')

const app = new koa()

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', '*')
  await next()
})

app.use(koaStatic('./static'))

app.listen(9091)
