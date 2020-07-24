import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixture/expenses';

test("with exp", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});

test("with empty", () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});