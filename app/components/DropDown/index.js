import React from 'react';
import PropTypes from 'prop-types';

function DropDown({val, onChange}) {
    return (
        <div className="row">
        <label>City</label>
          <select
            className="browser-default"
            onChange={onChange}
            value={val}
            name="city"
          >
            <option value="" disabled>Choose your option</option>
            <option value="dubai">Dubai</option>
            <option value="cairo">Cairo</option>
            <option value="london">London</option>
          </select>
        </div>
    )
}

DropDown.propTypes = {
    onChange: PropTypes.func,
    val: PropTypes.string,
};

export default DropDown;
