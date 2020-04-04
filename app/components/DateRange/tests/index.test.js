import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import DateRange from '../index';

describe('<DateRange />', () => {
    it('should render a Date', () => {
        const container = shallow(
            <DateRange val={['15-14-2020', '15-14-2020']} onChange={jest.fn()} />
        );
        expect(shallowToJson(container)).toMatchSnapshot();
    });

    it('should called onChange', () => {
        const submitSpy = jest.fn();
        const container = shallow(
            <DateRange val={['15-14-2020', '15-14-2020']} onChange={submitSpy} />
        );
        container.find('DateRangePicker').props().onChange();
        expect(submitSpy).toHaveBeenCalled();
    });
});
