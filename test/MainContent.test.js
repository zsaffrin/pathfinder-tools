import React from 'react';
import { shallow } from 'enzyme';

import MainContent from '../src/components/MainContent';

const { describe, it, expect } = global;

describe('<MainContent />', () => {
	it('should shallow mount for testing', () => {
		const wrapper = shallow(<MainContent />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render a container div', () => {
		const wrapper = shallow(<MainContent />);
		expect(wrapper.find('.container')).toHaveLength(1);
	});

	it('should render children', () => {
		const wrapper = shallow(
			<MainContent>
				<div className="child-element">Child</div>
			</MainContent>,
		);
		expect(wrapper.find('.child-element').exists()).toBe(true);
	});
});
