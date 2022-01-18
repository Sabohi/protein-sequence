import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type,
  name,
  id,
  onChange,
  className,
  autoComplete,
  placeholder,
  isDisabled,
  value,
  isRequired,
  onBlur,
  inputRef,
  min,
  maxLength,
  rows,
  checked,
}) => {
  let InputField = null;

  switch (type) {
    case 'textbox':
    case 'text':
      InputField = (
        <input
          type={type}
          name={name}
          id={id}
          ref={inputRef}
          onChange={onChange}
          className={className}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          disabled={isDisabled}
          required={isRequired}
          min={min}
          maxLength={maxLength}
          data-testid="text-input"
        />
      );
      break;
    case 'textarea':
      InputField = (
        <textarea
          name={name}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          className={className}
          value={value}
          onBlur={onBlur}
          disabled={isDisabled}
          required={isRequired}
          min={min}
          rows={rows || 2}
          data-testid="textarea"
        />
      );
      break;
    default:
      InputField = (
        <input
          type={type}
          name={name}
          id={id}
          checked={checked}
          onChange={onChange}
          className={className}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          disabled={isDisabled}
          required={isRequired}
          min={min}
          maxLength={maxLength}
          data-testid="text-input"
        />
      );
  }
  return InputField;
};

Input.defaultProps = {
  checked: false,
  autoComplete: '',
  placeholder: '',
  value: '',
  name: '',
  id: '',
  inputRef: null,
  isRequired: false,
  onChange: () => {
    /* Returns nothing */
  },
  isDisabled: false,
  className: '',
  onBlur: () => {
    /* Returns nothing */
  },
  min: '',
  maxLength: 10000,
  rows: 2,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  checked: PropTypes.bool,
  inputRef: PropTypes.func,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  min: PropTypes.string,
  maxLength: PropTypes.number,
  rows: PropTypes.number,
};

export default Input;
