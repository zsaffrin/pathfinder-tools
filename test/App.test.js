import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../src/components/Header';
import MainContent from '../src/components/MainContent';
import Footer from '../src/components/Footer';
import App from '../src/components/App';

const { describe, it, expect } = global;

describe('<App />', () => {
	it('should shallow mount for testing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	});

	it('state should have appTitle value length > 0', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.state('appTitle').length).toBeGreaterThan(0);
	});

	it('should render a Router', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Router)).toHaveLength(1);
	});

	it('should render a div with id \'app\'', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('#app')).toHaveLength(1);
	});

	it('should render a Header component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Header)).toHaveLength(1);
	});

	it('should render a MainContent component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(MainContent)).toHaveLength(1);
	});

	it('should render a Footer component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Footer)).toHaveLength(1);
	});
});
