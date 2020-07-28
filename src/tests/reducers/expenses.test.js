import expensesReducer from '../../reducers/expenses';
import expenses from '../fixture/expenses';

test('default', () => {
  const state = expensesReducer(undefined, {type: '$$INIT'});
  expect(state).toEqual([]);
});

test('remove by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
});

test('NOT remove by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});

test('add expense', () => {
  const expense = {
    id: '4',
    description: 'new',
    note: '', 
    amount: 1110, 
    createdAt: 0  
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2], expense])
});

test('edit expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      id: 'abc'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].id).toBe('abc')
});

test('not edit expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-123',
    updates: {
      id: 'abc'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});


test('set exp', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});