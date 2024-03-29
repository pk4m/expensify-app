import React from 'react';
import { shallow } from 'enzyme';
import { test, expect, jest } from '@jest/globals';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const startLogoutSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogoutSpy} />);
  wrapper.find('button').simulate('click');
  expect(startLogoutSpy).toHaveBeenCalled();
});
