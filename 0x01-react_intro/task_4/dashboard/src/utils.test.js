import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


// Test for getFullYear function//+
test('getFullYear returns the correct year', () => {//+
  const currentYear = new Date().getFullYear();//+
  expect(getFullYear()).toBe(currentYear);//+
});//+
//+
// Test for getFooterCopy function//+
test('getFooterCopy returns the correct string when argument is true', () => {//+
  expect(getFooterCopy(true)).toBe('Holberton School');//+
});//+
//+
test('getFooterCopy returns the correct string when argument is false', () => {//+
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');//+
});//+
//+
// Test for getLatestNotification function//+
test('getLatestNotification returns a string', () => {//+
  const notification = getLatestNotification();//+
  expect(typeof notification).toBe('string');//+
});//+

