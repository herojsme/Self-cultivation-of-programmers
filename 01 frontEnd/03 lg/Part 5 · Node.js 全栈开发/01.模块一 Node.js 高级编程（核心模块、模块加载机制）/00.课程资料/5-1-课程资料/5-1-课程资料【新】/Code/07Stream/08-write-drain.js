const fs = require('fs')

let ws = fs.createWriteStream('test.txt', {
  highWaterMark: 2
})

// 如果 flag为false,缓冲区的缓存达到水位会执行排空操作
let flag = ws.write('1')
console.log(`缓冲还没填满`, flag)

flag = ws.write('2')
console.log(`缓冲还没填满`, flag)



// 当缓冲区排空时会触发 drain 事件，可以恢复数据的继续读写
ws.on('drain', () => {
  console.log('缓冲数据已经排空')

  flag = ws.write('3')
  console.log(flag)
})