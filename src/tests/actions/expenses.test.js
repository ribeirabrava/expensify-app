import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('remove', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('edit', () => {
  const action = editExpense('123abb', {note: 'new'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abb',
    updates: {
      note: 'new'
    }
  });
});

test('add  provided', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'last m'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('add  default', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '', 
      amount: 0, 
      createdAt: 0
    }
  });
});
