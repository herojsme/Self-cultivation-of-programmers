const { Readable } = require('stream')

// 模拟底层数据
let source = ['lg', 'zce', 'syy']

// 自定义类继承 Readable
class MyReadable extends Readable {
  constructor(source) {
    super()
    this.source = source
  }

  //  _read() 方法读取底层数据
  _read() {
    let data = this.source.shift() || null
    // push把底层数据添加到缓存区
    this.push(data)
  }
}

// 实例化
let myReadable = new MyReadable(source)

myReadable.on('readable', () => {
  let data = null
  while ((data = myReadable.read()) != null) {
    console.log(data.toString())
  }
  // while ((data = myReadable.read(2)) != null) {
  //   console.log(data.toString())
  // }
})

// myReadable.on('data', (chunk) => {
//   console.log(chunk.toString())
// })