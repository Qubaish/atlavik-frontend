import React from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

function Range({val, onChange}) {
    return (
        <div className="row padding-2">
            <InputRange
                maxValue={200}
                minValue={50}
                value={val}
                onChange={val => onChange({target: {name: 'price', value: val}})}
            />
        </div>
    )
}

Range.propTypes = {
    onChange: PropTypes.func,
    val: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({}),
    ]),
};

export default Range;
