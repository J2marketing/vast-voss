import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../../constants';
import waveDarkGreen from '../../assets/waveDarkGreen.svg';
import waveGrey from '../../assets/waveGrey.svg';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  overflow-y: hidden;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  padding: 0rem 0rem;
  ${({ isDebug }) => isDebug && 'background-color: orange;'}
`;

const TopWave = styled.div`
  height: 198px;
  width: 100%;
  z-index: 100;
  overflow: hidden;
  position: relative;
`;

const BottomWave = styled.div`
  height: 198px;
  width: 100%;
  position: relative;
  overflow: hidden;
  & div {
    transform: rotate(180deg);
  }
`;

const WaveImgGreenTop = styled.div`
  height: 198px;
  position: absolute;
  background-position: top center;
  background-repeat: repeat-x;
  width: 6400px;
  overflow-y: hidden;
  bottom: 0;
  background-color: ${COLOR.LIGHTGREY};
  background-image: url(${waveDarkGreen});
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  animation-delay: 3500ms;
  -webkit-transform: translate3d(0, 0, 0);
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
`;

const WaveImgGreenBottom = styled.div`
  height: 198px;
  position: absolute;
  background-position: top center;
  background-repeat: repeat-x;
  width: 6400px;
  overflow-y: hidden;
  background-color: ${COLOR.LIGHTGREY};
  background-image: url(${waveDarkGreen});
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  -webkit-transform: translate3d(0, 0, 0);
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
`;

const WaveImgGreyTop = styled.div`
  height: 198px;
  position: absolute;
  background-position: top center;
  background-repeat: repeat-x;
  width: 6400px;
  overflow-y: hidden;
  bottom: 0;
  background-color: ${COLOR.LIGHTGREY};
  background-image: url(${waveGrey});
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  animation-delay: 3500ms;
  -webkit-transform: translate3d(0, 0, 0);
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
`;

const WaveImgGreyBottom = styled.div`
  height: 198px;
  position: absolute;
  background-position: top center;
  background-repeat: repeat-x;
  width: 6400px;
  overflow-y: hidden;
  background-color: ${COLOR.LIGHTGREY};
  background-image: url(${waveGrey});
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  -webkit-transform: translate3d(0, 0, 0);
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
`;

const InnerContainerFull = ({
  isWavyBottomGreen,
  isWavyTopGreen,
  isWavyTopGrey,
  isWavyBottomGrey,
  children,
  ...props
}) => (
  <Wrapper {...props}>
    {isWavyTopGreen && (
      <TopWave>
        <WaveImgGreenTop />
      </TopWave>
    )}
    {isWavyTopGrey && (
      <TopWave>
        <WaveImgGreyTop />
      </TopWave>
    )}
    {children}
    {isWavyBottomGreen && (
      <BottomWave>
        <WaveImgGreenBottom />
      </BottomWave>
    )}
    {isWavyBottomGrey && (
      <BottomWave>
        <WaveImgGreyBottom />
      </BottomWave>
    )}
  </Wrapper>
);

InnerContainerFull.defaultProps = {
  isWavyTopGreen: null,
  isWavyBottomGreen: null,
  isWavyTopGrey: null,
  isWavyBottomGrey: null,
  textColor: COLOR.LIGHTGREY,
  bgColor: COLOR.VOSS_GREEN,
  children: null,
  isDebug: false,
};

InnerContainerFull.propTypes = {
  isWavyTopGreen: PropTypes.element,
  isWavyBottomGreen: PropTypes.element,
  isWavyTopGrey: PropTypes.element,
  isWavyBottomGrey: PropTypes.element,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.element,
  isDebug: PropTypes.bool,
};

export { InnerContainerFull };
