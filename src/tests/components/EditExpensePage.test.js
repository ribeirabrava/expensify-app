import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixture/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
  <EditExpensePage 
    editExpense={editExpense} 
    removeExpense={removeExpense} 
    history={history} 
    expense={expenses[1]}
  />)
});

test('editexp page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('editexp handle on submit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('editexp handle on click', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id});
});