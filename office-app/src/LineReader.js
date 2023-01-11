const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('./toc-full')
});

rl.on('line', (line) => {
  let parsedLine = JSON.parse(line)
  console.log('Line from file:', parsedLine);
});