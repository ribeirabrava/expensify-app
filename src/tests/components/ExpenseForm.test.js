import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixture/expenses';
import { SingleDatePicker } from 'react-dates';

test('ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('expForm with data', () => {
  const wrapper = shallow(<ExpenseForm expenses={expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('expForm error', () => {
  const wrapper = shallow(<ExpenseForm expenses={expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('expForm input description change', () => {
  const value = 'New description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value);
});

test('expForm note change', () => {
  const value = 'New note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value);
});

test('expForm amount valid', () => {
  const value = "23.50";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value);
});

test('expForm amount invalid', () => {
  const value = "12.122";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
});

test('expForm onSubmit prop valid', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

test('expForm new date on date chnge', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find(SingleDatePicker).prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar on focus on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});