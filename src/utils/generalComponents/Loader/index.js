import React from 'react';
import PropTypes from 'prop-types';
import { LoaderComponent, StyledContainer } from './styles';

export const Loader = ({ active, style, color, size }) => (
  <StyledContainer style={style}>
    <LoaderComponent size={size || 50} color={color} loading={active} />
  </StyledContainer>
);

Loader.defaultProps = {
  style: undefined,
  color: 'green',
  size: undefined,
};
Loader.propTypes = {
  active: PropTypes.bool.isRequired,
  style: PropTypes.oneOfType([PropTypes.object]),
  color: PropTypes.string,
  size: PropTypes.number,
};
