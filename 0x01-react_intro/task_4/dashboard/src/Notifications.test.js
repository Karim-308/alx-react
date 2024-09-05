import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  // Test that Notifications renders without crashing
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  // Verify that Notifications renders three list items
  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).toHaveLength(3);
  });

  // Verify that Notifications renders the text "Here is the list of notifications"
  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toContain('Here are your notifications');
  });
});
