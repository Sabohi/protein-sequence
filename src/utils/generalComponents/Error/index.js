import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ color, message }) => <p style={{ color }}>{message}</p>;

Error.defaultProps = {
  message: '',
};

Error.propTypes = {
  color: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default Error;
