const MyTransform = require('./myTransform.js')

let ts = new MyTransform()

let str1 = '拉勾教育'

// console.log(Buffer.from(str1))
// console.log(ts.encode(str1, 1))

let encodeBuf = ts.encode(str1, 9)
// console.log('encodeBuf', encodeBuf)

let a = ts.decode(encodeBuf)
console.log(a)

let len = ts.getPackageLen(encodeBuf)
console.log(len)