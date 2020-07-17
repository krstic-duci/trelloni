import React from 'react';
// eslint-disable-next-line
import { useSelector, useDispatch } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { isEmailFieldValid, isPassFieldValid } from '../../utils/helpers';
import Login from '../Login';

// Mock react-redux useDispatch and useSelector hooks
jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

describe('<Login /> functionality', () => {
  var wrapper = null;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  test('should render on Login mount disabled submit button', () => {
    expect(
      wrapper.find('button[type="submit"]').props('disabled'),
    ).toBeTruthy();
  });
});
