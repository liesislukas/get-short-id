const anyBase = require('any-base');
const uuid = require('lite-uuid-v4');

function getId(prefix, chars) {
  prefix = typeof prefix === 'string' ? prefix : '';
  chars = chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';
  const fromHex = anyBase(anyBase.HEX, chars);
  let _uuid = uuid();
  // skip version number & "-"
  _uuid = _uuid.slice(0, 8) + _uuid.slice(9, 13) + _uuid.slice(15, 18) + _uuid.slice(15, 18) + _uuid.slice(24);
  return prefix + fromHex(_uuid);
}

module.exports = getId;
