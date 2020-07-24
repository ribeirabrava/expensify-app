import moment from 'moment';
import filtersReducers from '../../reducers/filters';

test('filters reducer default', () => {
  const state = filtersReducers(undefined, { type: '$$INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month') 
  });
});

test('sort by amount', () => {
  const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('sort by date', () => {
  const curentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducers(curentState, action);
  expect(state.sortBy).toBe('date');
});

test('set text filter', () => {
  const text = 'test'
  const action = { type: 'SET_TEXT_FILTER', text }
  const state = filtersReducers(undefined, action);
  expect(state.text).toBe(text)
});

test('start date', () => {
  const day = moment(0)
  const action = { type: 'SET_START_DATE', startDate: day }
  const state = filtersReducers(undefined, action);
  expect(state.startDate).toEqual(day);
});

test('end  date', () => {
  const day = moment(0);
  const action = { type: 'SET_END_DATE', endDate: day }
  const state = filtersReducers(undefined, action);
  expect(state.endDate).toEqual(day);
});