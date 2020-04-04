/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import DropDown from 'components/DropDown';
import Range from 'components/Range';
import DateRange from 'components/DateRange';

function Filters({type, state, onChange}) {
    switch (type) {
        case 'name':
            return (
                <Input val={state.name} onChange={onChange}/>
            );
        case 'city':
            return (
                <DropDown val={state.city} onChange={onChange}/>
            );
        case 'price':
            return (
                <Range val={state.price} onChange={onChange}/>
            );
        case 'date':
            return (
                <DateRange val={state.date} onChange={onChange}/>
            );
        case 'all':
            return (
                <Fragment>
                    <Input val={state.name} onChange={onChange}/>
                    <DropDown val={state.city} onChange={onChange}/>
                    <Range val={state.price} onChange={onChange}/>
                    <DateRange val={state.date} onChange={onChange}/>
                </Fragment>
            );
        default:
            return '';
    }
}

// We require the use of src and alt, only enforced by react in dev mode
Filters.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Filters;
