import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  padding: 1.5rem 1rem;
  ${({ isDebug }) => isDebug && 'background-color: orange;'}
`;

const InnerContainerBoxed = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>;

InnerContainerBoxed.defaultProps = {
  children: null,
  isDebug: false,
};

InnerContainerBoxed.propTypes = {
  children: PropTypes.element,
  isDebug: PropTypes.bool,
};

export { InnerContainerBoxed };
