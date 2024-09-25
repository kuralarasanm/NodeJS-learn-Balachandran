console.log("hello nodejs server");
// console.log(global);

// const os = require('os') // not working mjs require method
import os from 'os'

console.log(os.type());
console.log(os.version());
console.log(os.homedir);

// const path = require('path')
import path from 'path'

// console.log(__dirname);
// console.log(__filename);
console.log("-----------");
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

// const math = require("./math")
import math from '../math.js'

console.log(math.add(3, 3));
console.log(math.sub(3, 3));
console.log(math.mul(3, 3));
console.log(math.div(3, 3));

//destructured
// const { add, sub, mul, div } = require("./math")
import { add, sub, mul, div } from '../math.js';

console.log(add(3, 3));
console.log(sub(3, 3));
console.log(mul(3, 3));
console.log(div(3, 3));