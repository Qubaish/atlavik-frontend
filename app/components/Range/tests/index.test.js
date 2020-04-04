import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Range from '../index';

describe('<Range />', () => {
    it('should render a Range', () => {
        const container = shallow(
            <Range val={{min: 0, max: 200}} onChange={jest.fn()} />
        );
        expect(shallowToJson(container)).toMatchSnapshot();
    });

    it('should called onChange', () => {
        const submitSpy = jest.fn();
        const container = shallow(
            <Range val={{min: 0, max: 200}} onChange={submitSpy} />
        );
        container.find('InputRange').props().onChange();
        expect(submitSpy).toHaveBeenCalled();
    });
});
