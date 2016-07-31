'use strict';
const base64img =  require('base64-img');

const toBase64 = path => {
  return base64img.base64Sync(path);
}

module.exports = toBase64;
