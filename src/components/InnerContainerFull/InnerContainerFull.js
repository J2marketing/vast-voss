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
  height: 104px;
  width: 100%;
  z-index: 10;
  overflow: hidden;
  position: relative;
  transform: translate3d(0,0,0);
`;

const BottomWave = styled.div`
  height: 104px;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 10;
  transform: translate3d(0,0,0);
  & div {
    transform: rotate(180deg);
  }
`;
// TODO: Refactor these next 4 components into one that takes variables. not very DRY
const WaveImgGreenTop = styled.div`
  will-change: auto;
  height: 197px;
  position: absolute;
  background-position: top center;
  background-repeat: repeat-x;
  width: 6400px;
  overflow-y: hidden;
  bottom: 0;
  background-color: ${COLOR.LIGHTGREY};
  background-image: url(${waveDarkGreen});
  transform: translate3d(0, 0, 0);
  @media only screen and (min-width: 500px) {
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    animation-delay: 3500ms;
  }
  @media only screen and (max-width: 500px) {
    animation: wave 4s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    animation-delay: 2000ms;
  }
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
  will-change: auto;
  height: 197px;
  position: absolute;
  background-position: top center;
  background-repeat: repeat-x;
  width: 6400px;
  overflow-y: hidden;
  background-color: ${COLOR.LIGHTGREY};
  background-image: url(${waveDarkGreen});
  transform: translate3d(0, 0, 0);
  @media only screen and (min-width: 500px) {
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  }
  @media only screen and (max-width: 500px) {
    animation: wave 4s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  }
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
  will-change: auto;
  height: 197px;
  position: absolute;
  background-position: top center;
  background-repeat: repeat-x;
  width: 6400px;
  overflow-y: hidden;
  bottom: 0;
  background-color: ${COLOR.LIGHTGREY};
  background-image: url(${waveGrey});
  transform: translate3d(0, 0, 0);
  @media only screen and (min-width: 500px) {
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    animation-delay: 3500ms;
  }
  @media only screen and (max-width: 500px) {
    animation: wave 4s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    animation-delay: 2000ms;
  }
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
  will-change: auto;
  height: 197px;
  position: absolute;
  background-position: top center;
  background-repeat: repeat-x;
  width: 6400px;
  overflow-y: hidden;
  background-color: ${COLOR.LIGHTGREY};
  background-image: url(${waveGrey});
  transform: translate3d(0, 0, 0);
  @media only screen and (min-width: 500px) {
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  }
  @media only screen and (max-width: 500px) {
    animation: wave 4s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  }
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
  isWavyTopGreen: PropTypes.bool,
  isWavyBottomGreen: PropTypes.bool,
  isWavyTopGrey: PropTypes.bool,
  isWavyBottomGrey: PropTypes.bool,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.element,
  isDebug: PropTypes.bool,
};

export { InnerContainerFull };
