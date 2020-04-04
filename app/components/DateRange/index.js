import React from 'react';
import PropTypes from 'prop-types';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

function DateRange({val, onChange}) {
    return (
        <div className="row padding-2">
          <DateRangePicker
            onChange={val => onChange({target: {name: 'date', value: val}})}
            value={val}
          />
        </div>
    )
}

DateRange.propTypes = {
    onChange: PropTypes.func,
    val: PropTypes.string,
};

export default DateRange;
