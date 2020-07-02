const koa = require('koa')
const koaStatic = require('koa-static')
const koaRouter = require('koa-router')

const app = new koa()

const router = new koaRouter()

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', '*')
  await next()
})

router.get('/', async (ctx, next) => {
  ctx.body = {
    token: 'fglajieu23oiwrjgioqwkofp'
  }
  await next()
})

app.use(router.routes()).use(router.allowedMethods())

app.use(koaStatic('./static'))

app.listen(9091)
