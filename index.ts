import {customAlphabet} from 'nanoid';

export default function getId(options: { prefix?: string, count?: number, chars?: string }): string {
  let prefix = options?.prefix || '';
  let chars = options?.chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';
  let count = options?.count || 24;

  // some math to check probability of collision
  // https://zelark.github.io/nano-id-cc/

  return `${prefix}${customAlphabet(chars, count)()}`;
}
