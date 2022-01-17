const express=require('express');

let server=express();
server.listen(8080);

server.use('/article', require('./routes/article'));
server.use('/user', require('./routes/user'));

server.use((req, res)=>{
  res.send('404你懂的');
});

/*
http://xxx.com/article/123332432            ->      阅读文章
http://xxx.com/article/123332432/comment    ->      文章评论
http://xxx.com/article/edit                 ->      编辑文章
http://xxx.com/article/aaa/a
http://xxx.com/article/aaa/b
http://xxx.com/article/aaa/c

http://xxx.com/user/4432                    ->      用户信息
http://xxx.com/user/4432/comment            ->      用户评论
*/
