import React from 'react';
import PropTypes from 'prop-types';

function Input({val, onChange}) {
    return (
        <div className="row">
            <input
                placeholder="Name"
                id="name"
                type="text"
                name="name"
                onChange={onChange}
                value={val}
            />
        </div>
    )
}

Input.propTypes = {
    onChange: PropTypes.func,
    val: PropTypes.string,
};

export default Input;
