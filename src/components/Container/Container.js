import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  padding: 0px;
  ${({ isDebug }) => isDebug && 'background-color: orange;'}
`;

const Container = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>;

Container.defaultProps = {
  children: null,
  isDebug: false,
};

Container.propTypes = {
  children: PropTypes.node,
  isDebug: PropTypes.bool,
};

export { Container };
