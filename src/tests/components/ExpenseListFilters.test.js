import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altfilters } from '../fixture/filters';
import { DateRangePicker } from 'react-dates';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters} 
      setTextFilter={setTextFilter} 
      sortByDate={sortByDate} 
      sortByAmount={sortByAmount} 
      setStartDate={setStartDate} 
      setEndDate={setEndDate}
    />
  );
});

test('expListFilters', () => {
  expect(wrapper).toMatchSnapshot();
});

test('expListFilters with alt data', () => {
  wrapper.setProps({
    filters: altfilters
  })
  expect(wrapper).toMatchSnapshot();
});

test('text ch', () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: {value}
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('sort by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters: altfilters
  })
  wrapper.find('select').simulate('change', {
    target: {value}
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: {value}
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8 , 'years');
  wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});