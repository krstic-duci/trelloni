import React from 'react';
// eslint-disable-next-line
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Login from '../../containers/Login';
import NoMatch from '../NoMatch';

// Mock react-redux useDispatch and useSelector hooks
jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

describe('<NoMatch /> handler', () => {
  it('should render NoMatch (404) page on invalid path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/non-existing ']}>
        <NoMatch />
      </MemoryRouter>,
    );

    expect(wrapper.find(Login).exists()).toBeFalsy();
    expect(wrapper.find(NoMatch).exists()).toBeTruthy();
  });

  it('should render Login page on app start', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/login ']}>
        <Login />
      </MemoryRouter>,
    );

    expect(wrapper.find(Login).exists()).toBeTruthy();
    expect(wrapper.find(NoMatch).exists()).toBeFalsy();
  });
});
