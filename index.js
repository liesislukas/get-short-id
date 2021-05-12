const {customAlphabet} = require('nanoid');

function getId(prefix, chars) {
  prefix = typeof prefix === 'string' ? prefix : '';
  chars = chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';
  // generate 1k IDs/second and you will need 2 billion years to have 1% probability of 1 collision
  // https://zelark.github.io/nano-id-cc/
  return prefix + (customAlphabet(chars, 24)());
}

module.exports = getId;
