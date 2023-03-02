let fs = require('fs')

let rs = fs.createReadStream('test.txt', {
  highWaterMark: 4
})

let ws = fs.createWriteStream('test1.txt', {
  highWaterMark: 1
})

// let flag = true

// rs.on('data', (chunk) => {
//   flag = ws.write(chunk, () => {
//     console.log('写完了')
//   })
//   console.log('flag', flag)
//   if (!flag) {
//     rs.pause()
//   }
// })

// ws.on('drain', () => {
//   console.log('drain', )
//   rs.resume()
// })

rs.pipe(ws)