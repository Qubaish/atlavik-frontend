import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Footer from '../index';

describe('<Footer />', () => {
    it('should render a DropDown', () => {
        const container = shallow(
            <Footer />
        );
        expect(shallowToJson(container)).toMatchSnapshot();
    });
});
