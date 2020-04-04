import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Input from '../index';

describe('<Input />', () => {
    it('should render a Input', () => {
        const container = shallow(
            <Input val="Dubai" onChange={jest.fn()} />
        );
        expect(shallowToJson(container)).toMatchSnapshot();
    });

    it('should called onChange', () => {
        const submitSpy = jest.fn();
        const container = shallow(
            <Input val="Dubai" onChange={submitSpy} />
        );
        container.find('input').props().onChange();
        expect(submitSpy).toHaveBeenCalled();
    });
});
