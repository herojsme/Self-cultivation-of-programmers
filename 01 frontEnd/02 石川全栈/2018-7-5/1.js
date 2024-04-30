const http=require('http');

http.createServer((req, res)=>{
  res.write(JSON.stringify({name: 'blue', pass: '123456'}));
  res.end();
}).listen(8080);
