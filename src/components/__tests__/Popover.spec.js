import React from 'react'
import Popover from '../Popover';
import { shallow, mount } from 'enzyme';

describe('<Popover /> functionality', () => {

  it('should check "show" props for Popover not showing', () => {
    let wrapper = shallow(
      <Popover show={false} type='' text={[]} />
    );
    
    expect(wrapper.find(Popover).exists()).toBeFalsy();
  });

  it('should check "type" props for Popover text title', () => {
    let wrapper = mount(
      <Popover show={true} type='email' text={[]} />
    );

    expect(wrapper.find(Popover).props().type).toBe('email');
  });

  it('should print 3 items in Popover', () => {
    let wrapper = shallow(
      <Popover show={true} type='' text={['1', '2', '3']} />
    );
    expect(
      wrapper.find('div.popover-container').children('ul').children(),
    ).toHaveLength(3);
  });
})
