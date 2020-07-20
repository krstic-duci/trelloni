import React from 'react';
// eslint-disable-next-line
import { useDispatch } from 'react-redux';
import { shallow } from 'enzyme';
import CardMaker from '../CardMaker';

// Mock react-redux useDispatch and useSelector hooks
jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

describe('<CardMaker /> functionality', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardMaker />);
  });

  it('should not render Form without the button click', () => {
    expect(wrapper.find('form').exists()).toBeFalsy();
  });

  it('should render Form when the button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.find('form').exists()).toBeTruthy();
  });

  it('should render correct input value', () => {
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('input[type="text"]').simulate('change', {
      target: {
        value: 'dusan',
      },
    });

    expect(wrapper.find('input[type="text"]').props().value).toBe('dusan');
  });

  // eslint-disable-next-line
  it('should reset input value to default when clicked on submit button', () => {
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('input[type="text"]').simulate('change', {
      target: {
        value: 'dusan',
      },
    });
    wrapper.find('button').at(1).simulate('click');

    expect(wrapper.find('input[type="text"]').props().value).toBe('');
  });

  it("should render diff text on button that's opening form", () => {
    const textBeforeClick = wrapper.find('button').at(0).text();
    wrapper.find('button').at(0).simulate('click');
    const textAfterClick = wrapper.find('button').at(0).text();
    expect(textBeforeClick).not.toBe(textAfterClick);
  });

  // TODO: test useDispatch when making new card
});
