import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  padding: 0rem 0rem;
  ${({ isDebug }) => isDebug && 'background-color: orange;'}
  &:before, &:after{
    ${({ isWavyTop, isWavyBottom }) => (isWavyTop || isWavyBottom) && `
      left: 0;
      width: 100%;
      height: 60px;
      background-size: 100px 100%;
    `}
  }
  &:before{
    ${({ isWavyTop }) => isWavyTop && `
      content:"";
      
      display:inline-block;
      background-image: url(https://bitbucket-marketing-cdn.atlassian.com/dam/jcr:cd01b96d-381e-49ab-a487-c7d1df92cf59/atlassian%20wave%20adg30524.svg);
    `}
  }
  &:after{
    ${({ isWavyBottom }) => isWavyBottom && `
      bottom: 0;
      background-image: linear-gradient(15deg, #2980b9 50%, #3498db 50%);
    `}
  }
  
`;

const InnerContainerFull = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>;

InnerContainerFull.defaultProps = {
  isDebug: false,
};

InnerContainerFull.propTypes = {
  isDebug: PropTypes.bool,
};

export { InnerContainerFull };
