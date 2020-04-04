import React from 'react';
import {constructStringMultiSearch, constructStringSingleSearch, formatDate} from '../utils';

const state = {name: 'name', city: 'city', price: {min: 0, max: 20}, date: [new Date('10-10-2020'), new Date('10-10-2020')]}
describe('Utils', () => {
    it('constructStringMultiSearch', () => {
        expect(constructStringMultiSearch(state)).toEqual('?name=name&city=city&price=0:20&date=10-10-2020:10-10-2020');
    })
    it('constructStringSingleSearch', () => {
        expect(constructStringSingleSearch(state, 'name')).toEqual('?name=name');
    })
    it('constructStringSingleSearch', () => {
        expect(constructStringSingleSearch(state, 'price')).toEqual('?price=0:20');
    })
    it('constructStringSingleSearch', () => {
        expect(constructStringSingleSearch(state, 'date')).toEqual('?date=10-10-2020:10-10-2020');
    })
    it('formatDate', () => {
        expect(formatDate(new Date('10-10-2020'))).toEqual('10-10-2020');
    })
});