import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Loadable from '../loadable';

describe('Loadable', () => {
    it('should render a Home page', () => {
        const container = shallow(
            <Loadable fallback={"...."}>
                <div>test</div>
            </Loadable>
        );
        expect(shallowToJson(container)).toMatchSnapshot();
    });
});