import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpenseSummary';

test('1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
  expect(wrapper).toMatchSnapshot();

});

test('multy expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235123445678}/>);
  expect(wrapper).toMatchSnapshot();
});