// https://blog.csdn.net/u012961419/article/details/121534498

const fs = require('fs')
const EventEmitter = require('events')

class MyFileReadStream extends EventEmitter {
    constructor(path, options = {}) {
        // ...
        this.flowing = true // 是否在流动
        // ...
    }

    open() {
        // ...
    }

    read() {
        // ...
    }

    read() {
        // ...

        fs.read(this.fd, buf, 0, howMuchToRead, this.readOffset, (err, readBytes) => {
            if (readBytes) {
                this.readOffset += readBytes
                this.emit('data', buf.slice(0, readBytes))
                // 继续读取
                // this.read()
                // 判断是否暂停读取
                if (this.flowing) {
                    this.read()
                }
            } else {
                this.emit('end')
                this.close()
            }
        })
    }

    pause() {
        if (this.flowing) {
            this.flowing = false
        }
    }

    resume() {
        if (!this.flowing) {
            this.flowing = true
            this.read()
        }
    }

    pipe(ws) {
        this.on('data', chunk => {
            const flag = ws.write(chunk)
            if (!flag) {
                // 暂停读取
                this.pause()
                // 恢复读取
                ws.on('drain', () => {
                    this.resume()
                })
            }
        })
    }
}

module.exports = MyFileReadStream
