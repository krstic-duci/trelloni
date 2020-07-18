import React from 'react';
// eslint-disable-next-line
import { useSelector, useDispatch } from 'react-redux';
import { shallow } from 'enzyme';
import { isEmailFieldValid, isPassFieldValid } from '../../utils/helpers';
import Login from '../Login';

// Mock react-redux useDispatch and useSelector hooks
jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

describe('<Login /> functionality', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  test('should render on Login mount disabled submit button', () => {
    expect(wrapper.find('button[type="submit"]').props().disabled).toBeTruthy();
  });

  test('should render enabled submit button when pass/email are valid', () => {
    wrapper.find('input[type="email"]').simulate('change', {
      target: { name: 'email', value: 'duconka@ducolinka.com' },
    });
    wrapper.find('input[type="password"]').simulate('change', {
      target: { name: 'password', value: 'Duleaka90' },
    });

    expect(wrapper.find('button[type="submit"]').props().disabled).toBeFalsy();
  });

  test('should forbid invalid email', () => {
    expect(isEmailFieldValid('dusan    ')).toBeFalsy();
    expect(isEmailFieldValid('dusandusan@')).toBeFalsy();
    expect(isEmailFieldValid('a@a.com')).toBeFalsy();
    expect(isEmailFieldValid('      ')).toBeFalsy();
  });

  test('should forbid invalid pass', () => {
    expect(isPassFieldValid('duleakakrstic')).toBeFalsy();
    expect(isPassFieldValid('@@@__')).toBeFalsy();
    expect(isPassFieldValid('       ')).toBeFalsy();
  });

  test('should allow valid email', () => {
    expect(isEmailFieldValid('duconka@ducolinka.com')).toBeTruthy();
  });

  test('should allow valid pass', () => {
    expect(isPassFieldValid('Duleaka90')).toBeTruthy();
  });

  test('should not render <Popover /> when email/pass are blured', () => {
    wrapper.find('input[type="email"]').simulate('blur', {
      target: { name: 'email', value: '' },
    });
    wrapper.find('input[type="password"]').simulate('blur', {
      target: { name: 'password', value: '' },
    });

    expect(wrapper.find('div.popover-container').exists()).toBeFalsy();
  });

  // TODO: Write a test for useDispatch on submit button
});
