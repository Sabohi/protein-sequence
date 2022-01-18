import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ value, children, className }) => {
  let element = null;
  switch (value) {
    case 1:
      element = <h1 className={className}>{children}</h1>;
      break;
    case 2:
      element = <h2>{children}</h2>;
      break;
    case 3:
      element = <h3>{children}</h3>;
      break;
    case 4:
      element = <h4>{children}</h4>;

      break;
    case 5:
      element = <h5>{children}</h5>;

      break;
    case 6:
      element = <h6>{children}</h6>;

      break;
    default:
      element = null;
  }
  return element;
};

Heading.defaultProps = {
  value: 0,
  className: '',
};

Heading.propTypes = {
  value: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default Heading;
