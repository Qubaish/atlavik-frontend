import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Filters from '../index';

describe('<Filters />', () => {
    it('should render a Input', () => {
        const container = shallow(
            <Filters type="name" state={{name: 'val'}} onChange={jest.fn()} />
        );
        expect(shallowToJson(container)).toMatchSnapshot();
    });
    it('should render a Input', () => {
        const container = shallow(
            <Filters type="city" state={{city: 'val'}} onChange={jest.fn()} />
        );
        expect(shallowToJson(container)).toMatchSnapshot();
    });
    it('should render a Input', () => {
        const container = shallow(
            <Filters type="price" state={{price: {min: 0, max: 20}}} onChange={jest.fn()} />
        );
        expect(shallowToJson(container)).toMatchSnapshot();
    });
    it('should render a Input', () => {
        const container = shallow(
            <Filters type="date" state={{date: ['15-10-2020', '15-10-2020']}} onChange={jest.fn()} />
        );
        expect(shallowToJson(container)).toMatchSnapshot();
    });
    it('should render a Input', () => {
        const container = shallow(
            <Filters type="all" state={{name: 'val', city: 'dubai'}} onChange={jest.fn()} />
        );
        expect(shallowToJson(container)).toMatchSnapshot();
    });
});
