import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({ name, value, checked, onChange, className, required, isDisabled }) => (
  <input
    type="radio"
    name={name}
    value={value}
    checked={checked}
    onChange={onChange}
    className={className}
    required={required}
    data-testid="radiobox"
    disabled={isDisabled}
  />
);

RadioButton.defaultProps = {
  value: '',
  onChange: () => {
    /* Returns nothing */
  },
  checked: false,
  className: '',
  required: false,
  isDisabled: false,
};

RadioButton.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  className: PropTypes.string,
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  isDisabled: PropTypes.bool,
};

export default RadioButton;
