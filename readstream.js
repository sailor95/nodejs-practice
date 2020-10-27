const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();
// source stream
const readStream = fs.createReadStream('./example2.gzip');
// destination stream
const writeStream = fs.createWriteStream('uncompressed.txt');

// Same as the pipe process
// readStream.on('data', chunk => {
//   writeStream.write(chunk);
//   console.log(chunk);
// });

readStream.pipe(gunzip).pipe(writeStream); // Chained pipe
