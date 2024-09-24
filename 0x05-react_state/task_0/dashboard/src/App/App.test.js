/**
 * @jest-environment jsdom
 */
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { shallow, mount } from 'enzyme';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<App />', () => {
  it('should have a default state where displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('should set displayDrawer to true when handleDisplayDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it('should set displayDrawer to false when handleHideDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });
});
