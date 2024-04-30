const urllib=require('url');
const pathlib=require('path');
const http=require('http');
const https=require('https');
const fs=require('fs');

//let req=http.request('http://www.taobao.com');
let req=http.request({
  host: 'www.taobao.com',
  path: '/',
  headers: {}
}, res=>{
  //console.log(res.statusCode);
  if(res.statusCode>=200 && res.statusCode<300 || res.statusCode==304){
    let arr=[];

    res.on('data', data=>{
      arr.push(data);
    });

    res.on('end', ()=>{
      let buffer=Buffer.concat(arr);

      fs.writeFile(pathlib.resolve('tmp', 'taobao.html'), buffer, err=>{
        if(err){
          console.log('写入文件失败', err);
        }else{
          console.log('完成');
        }
      });
    });
  }else if(res.statusCode==301 || res.statusCode==302){
    console.log(res.headers);
  }else{
    console.log('错了', res.statusCode);
  }
});

req.on('error', err=>{
  console.log('错了', err);
});
req.write('');      //发送POST数据
req.end();          //正式开始请求
