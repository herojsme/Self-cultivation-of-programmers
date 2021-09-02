const fs=require('fs');

/*fs.readFile('1.txt', (err, data)=>{
  if(err){
    console.log('有错');
  }else{
    console.log(data.toString());
  }
});*/

fs.writeFile('1.txt', 'erqwreqwere', err=>{
  if(err){
    console.log(err);
  }else{
    console.log('成功');
  }
});
