const koa=require('koa');
const mysql=require('koa-mysql');
const convert=require('koa-convert');

const db=mysql.createPool({host: 'localhost', port: 3309, user: 'root', password: '', database: '20180412'})

let server=new koa();
server.listen(8080);

server.use(async ctx=>{
  let data=await convert(db.query)(`SELECT * FROM user_table`);

  ctx.response.body=data;
});
