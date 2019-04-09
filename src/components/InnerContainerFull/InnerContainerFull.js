import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../../constants';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  padding: 0rem 0rem;
  ${({ isDebug }) => isDebug && 'background-color: orange;'}
  &:before, &:after {
    ${({ isWavyTop, isWavyBottom }) =>
      (isWavyTop || isWavyBottom) &&
      `
      left: 0;
      width: 100%;
      height: 60px;
      background-size: 100px 100%;
    `}
  }
  &:before {
    ${({ isWavyTop }) =>
      isWavyTop &&
      `
      content:"";
      
      display:inline-block;
      background-image: url(https://bitbucket-marketing-cdn.atlassian.com/dam/jcr:cd01b96d-381e-49ab-a487-c7d1df92cf59/atlassian%20wave%20adg30524.svg);
    `}
  }
  &:after {
    ${({ isWavyBottom }) =>
      isWavyBottom &&
      `
      bottom: 0;
      content: "";
      height:20px;
      background: url(https://goj2.com/wp-content/uploads/2018/08/wave.svg) repeat-x; 
      transform: rotateX(180deg);
    `}
  }
`;

const BottomWave = styled.div`
  height: 30px;
  background-color: red;
`;

const TopWave = styled.div`
  height: 30px;
  background-color: red;
`;
const InnerContainerFull = ({ isWavyBottom, isWavyTop, children, ...props }) => (
  <Wrapper {...props}>
    {isWavyTop && <TopWave />} {children} {isWavyBottom && <BottomWave />}
  </Wrapper>
);

InnerContainerFull.defaultProps = {
  isWavyTop: null,
  isWavyBottom: null,
  textColor: COLOR.WHITE,
  bgColor: COLOR.VOSS_GREEN,
  children: null,
  isDebug: false,
};

InnerContainerFull.propTypes = {
  isWavyTop: PropTypes.element,
  isWavyBottom: PropTypes.element,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.element,
  isDebug: PropTypes.bool,
};

export { InnerContainerFull };
