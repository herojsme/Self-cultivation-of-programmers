const fs = require('fs')

// 参数1是底层数据来源
// 参数2是可选的选项对象
const rs = fs.createReadStream('./test.txt', {
  flags: 'r', // 以什么模式打开文件，`r` 表示可读模式
  encoding: null, // 编码，默认 `null，表示 Buffer
  fd: null, // 文件描述符，默认 null，从 `3` 开始
  mode: 0o66, // 权限，默认 438（十进制）或 0o66（八进制）
  autoClose: true, // 是否自动关闭文件
  start: 0, // 读取的起始位置
  // end: 3, // 读取的截至位置
  highWaterMark: 4 // 水位线，表示每次读取多少字节的数据
})


// 通过暂停和恢复 data 事件可以切换暂停/流动模式。
// rs.on('data', (chunk) => {
//   console.log(chunk.toString())
//   // 暂停触发 data 事件：进入暂停模式
//   rs.pause()
//   setTimeout(() => {
//     // 恢复触发 data 事件：进入流动模式
//     rs.resume()
//   }, 1000)
// })

// readable 事件消费数据的流程
rs.on('readable', () => {
  // let data = rs.read()
  // console.log(data)
  let data
  // 获取缓冲区存储的数据的长度
  while ((data = rs.read(1)) !== null) {
    console.log(data.toString())
    console.log('----------', rs._readableState.length)
  }
})

// rs.on('open', (fd) => {
//   console.log(fd, '文件打开了')
// })

// rs.on('close', () => {
//   console.log('文件关闭了')
// })

// rs.on('error', (err) => {
//   console.log('出错了')
// })

// 常见使用方式
// 可读流每次读取的都是不完整的数据片段，在使用用时需要将其暂时存储起来，当全部数据消费完再重新拼接。
// let bufferArr = []
// rs.on('data', (chunk) => {
//   bufferArr.push(chunk)
// })

// rs.on('end', () => {
//   console.log('bufferArr', bufferArr)
//   console.log(Buffer.concat(bufferArr).toString())
//   console.log('当数据被清空之后')
// })
