import moment from 'moment';
import { setEndDate, setStartDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';

test('set start date', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('set end date', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('sort by date', () => {
  expect( sortByDate()).toEqual({type: 'SORT_BY_DATE'});
});

test('sort by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('set text prevent', () => {
  const text = 'test';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('set text default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});