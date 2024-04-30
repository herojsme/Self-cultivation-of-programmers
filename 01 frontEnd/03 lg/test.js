const fs = require("fs");

const rs = fs.createReadStream("./test1.txt");
const ws = fs.createWriteStream("./test2.txt");

// rs.on("data", (chuck) => {
//     ws.write(chuck)
// })
rs.pipe(ws)