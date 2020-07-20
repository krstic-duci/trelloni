import React from 'react';
import { shallow } from 'enzyme';
import CardWrapper from '../CardWrapper';

describe('<CardWrapper /> functionality', () => {
  it('should render title of a card in h2', () => {
    const wrapper = shallow(
      <CardWrapper titleHeadline={'random title'} cardsToPrint={[]} />,
    );

    expect(wrapper.find('h2').text()).toBe('random title');
  });
});
