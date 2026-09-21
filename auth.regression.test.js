const { login } = require('./auth');

test('sai mật khẩu', () => {
  expect(login('admin', 'wrong')).toBe(false);
});
test('username rỗng', () => {
  expect(login('', '123')).toBe(false);
});
test('mật khẩu chứa ký tự đặc biệt', () => {
  expect(login('admin', '!@#$')).toBe(false);
});
test('tài khoản không tồn tại', () => {
  expect(login('unknown', '123')).toBe(false);
});
