const koa=require('koa');
const pathlib=require('path');
const ejs=require('koa-ejs');

let server=new koa();
server.listen(8080);

ejs(server, {
  root:     pathlib.resolve('template'),
  layout:   false,
  viewExt:  'ejs'
});

server.use(async ctx=>{
  await ctx.render('1', {
    name: 'blue',
    age: 18
  });
});
