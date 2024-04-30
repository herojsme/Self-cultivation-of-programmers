const http=require('http');

http.createServer(function (req, res){
  res.setHeader('content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.write('[12,5,8,9]');
  res.end();
}).listen(8090);
