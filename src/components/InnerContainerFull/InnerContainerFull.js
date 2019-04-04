import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  padding: 0rem 0rem;
  ${({ isDebug }) => isDebug && 'background-color: orange;'}
`;

const InnerContainerFull = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>;

InnerContainerFull.defaultProps = {
  isDebug: false,
};

InnerContainerFull.propTypes = {
  isDebug: PropTypes.bool,
};

export { InnerContainerFull };
