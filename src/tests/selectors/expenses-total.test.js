import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixture/expenses';

test('return 0', () => {
  const res = selectExpensesTotal([])
  expect(res).toBe(0);
});

test('single exp', () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test('multy exp', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(114195);
});