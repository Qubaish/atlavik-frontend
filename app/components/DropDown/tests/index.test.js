import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import DropDown from '../index';

describe('<DropDown />', () => {
    it('should render a DropDown', () => {
        const container = shallow(
            <DropDown val="Dubai" onChange={jest.fn()} />
        );
        expect(shallowToJson(container)).toMatchSnapshot();
    });

    it('should called onChange', () => {
        const submitSpy = jest.fn();
        const container = shallow(
            <DropDown val="Dubai" onChange={submitSpy} />
        );
        container.find('select').props().onChange();
        expect(submitSpy).toHaveBeenCalled();
    });
});
