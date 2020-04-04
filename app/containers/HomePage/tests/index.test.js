import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import HomePage from '../index';

import reactMock from 'react';

const setHookState = (newState= {}) => jest.fn().mockImplementation((state= {}) => [
    newState,
    (newState= {}) => {}
 ])

describe('Home Page', () => {
    it('should render a Home page', () => {
        const container = shallow(
            <HomePage />
        );
        expect(shallowToJson(container)).toMatchSnapshot();
    });

    it('should render with hotels', () => {
        reactMock.useState = setHookState({
            hotelsList: [{name: 'hi', price: 2, city: 'dubai', availability: []}],
        })
        const container = shallow(
            <HomePage />
        );
        expect(shallowToJson(container)).toMatchSnapshot();
    });

    it('should call handleField Change', () => {
        const container = shallow(
            <HomePage />
        );
        const submitButton = container.find('Filters');
        submitButton.props().onChange({target: {name: 'name', value: 'name'}});
        expect(shallowToJson(container)).toMatchSnapshot();
    });

    it('should call search method', () => {
        const container = shallow(
            <HomePage />
        );
        const submitButton = container.find('button').first();
        const submitButton2 = container.find('button').last();
        submitButton.props().onClick();
        submitButton2.props().onClick();
        expect(shallowToJson(container)).toMatchSnapshot();
    });
});
