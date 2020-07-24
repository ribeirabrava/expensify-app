import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('not found', () => {
  const wrapped = shallow(<NotFoundPage />);
  expect(wrapped).toMatchSnapshot();
})

