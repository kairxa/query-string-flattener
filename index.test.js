/* eslint-disable no-undef */

const queryStringFlattener = require('./index');

it('should return proper query string from an object', () => {
  const object = {
    meme: '123',
    emem: '321',
  };

  expect(queryStringFlattener(object)).toBe('?meme=123&emem=321');
});

it('should return empty string from undefined object', () => {
  const object = undefined;

  expect(queryStringFlattener(object)).toBe('?');
});
