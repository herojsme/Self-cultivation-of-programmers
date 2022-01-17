const koa=require('koa');
const router=require('koa-router');



let server=new koa();
server.listen(8080);


let r1=router();
server.use(r1.routes());

r1.get('/aaa', async (ctx, next)=>{
  //ctx.req         原生req对象
  //ctx.request     封装req对象

  //ctx.res
  //ctx.response
  console.log(ctx.request);

  console.log(ctx.request.headers);

  ctx.response.status=403
  //ctx.response.set('a', 12);
  //ctx.response.body={a: 12, b: 55};
});
