import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../../constants';
import waveDarkGreen from '../../assets/waveDarkGreen.svg';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  overflow: hidden;
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
  height: 0%;
  width: 100%;
  position: absolute;
`;

const WaveImgGreen = styled.div`
  height: 74px;
  position: absolute;
  background-repeat: repeat-x;
  width: 6400px;
  overflow: hidden;
  background-color: ${COLOR.WHITE};
  background-image: url(${waveDarkGreen});
  animation: wave 20s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: rotate(180deg) translate3d(0, 0, 0);
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
      margin-right: 1600px;
    }
  }
`;

const TopWave = styled.div`
  height: 30px;
  background-color: red;
`;
const InnerContainerFull = ({ isWavyBottom, isWavyTop, children, ...props }) => (
  <Wrapper {...props}>
    {isWavyTop && <TopWave />} {children}{' '}
    {isWavyBottom && (
      <BottomWave>
        <WaveImgGreen />
      </BottomWave>
    )}
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
