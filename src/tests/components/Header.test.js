import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header';
import { startLogin } from '../../actions/auth';

test('header', () => {
  const wrapper = shallow(<Header startLogout={() => {}}/>);
  expect(wrapper).toMatchSnapshot();
});

test('call startlogout onClick', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout}/>);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});