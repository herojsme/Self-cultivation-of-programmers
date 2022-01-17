const koa=require('koa');
const session=require('koa-session');

let server=new koa();
server.listen(8080);

server.keys=require('./.keys');

server.use(session({}, server));

server.use(async ctx=>{
  if(ctx.session['count']){
    ctx.session['count']++;
  }else{
    ctx.session['count']=1;
  }

  ctx.response.body=`这是你第${ctx.session.count}次来访`;
});
