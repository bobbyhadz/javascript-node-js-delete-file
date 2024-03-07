// Deleting a file using fs.unlinkSync() in Node.js

import fs from 'fs';

// 👇️ if you use require() syntax uncomment this
// const fs = require('fs')

const path = './animal.png';

try {
  fs.unlinkSync(path);

  console.log(`Deleted the file under ${path}`);
} catch (err) {
  console.log('An error occurred: ', err.message);
}
