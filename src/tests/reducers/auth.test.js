import authReducer from '../../reducers/auth';

test('set uid 4 login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abc123'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);

});

test('clear uid 4 logout', () => {
  const action = {
    type: 'LOGIN',
  };
  const state = authReducer({ uid: 'fghss'}, action);
  expect(state).toEqual({});

});