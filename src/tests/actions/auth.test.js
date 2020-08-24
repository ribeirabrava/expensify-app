import { login, logout } from '../../actions/auth';

test('generate login act obj', () => {
  const uid = 'abc123';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('generate logout act obj', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});