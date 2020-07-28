import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixture/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
  <EditExpensePage 
  startEditExpense={startEditExpense} 
    startRemoveExpense={startRemoveExpense} 
    history={history} 
    expense={expenses[1]}
  />)
});

test('editexp page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('startEditExpense handle on submit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('startRemoveExpense handle on click', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id});
});