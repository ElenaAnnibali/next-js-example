import {
  deleteCookie,
  getParsedCookie,
  setStringifiedCookie,
  stringifyCookieValue,
} from '../cookies';

test('stingify a cookie value', () => {
  expect(stringifyCookieValue({ 1: 10, 2: 15 })).toBe(
    JSON.stringify({ 1: 10, 2: 15 }),
  );
});

test('set, gets and delete a cookie', () => {
  const cookie = {
    key: 'diet',
    value: [{ id: '1', eatCounter: 2 }],
  };

  // first, we test if cookie is undefined
  expect(getParsedCookie(cookie.key)).toBe(undefined);

  // set the cookie value and test that the value was updated
  expect(setStringifiedCookie(cookie.key, cookie.value)).toBe(undefined);

  // best practice: clean up after test
  expect(deleteCookie(cookie.key)).toBe(undefined);
});
