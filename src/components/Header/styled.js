import styled from 'styled-components';
import { darken } from 'polished';
import { COLOR } from '../../constants';

export const HeaderWrapper = styled.div`
  background-color: ${COLOR.VOSS_GREEN};
  border-bottom: 0.2rem solid ${darken(0.1, COLOR.VOSS_GREEN)};
  max-height: 15vh;
  min-height: 82px;
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  max-height: 15vh;
  min-height: 82px;
  font-weight: 700;
`;

export const SiteImg = styled.img`
  margin: 1vh;
`;

export const MenuIcon = styled.img`
  margin-left: auto;
  @media only screen and (max-width:980px){
    display:flex;
  }
  display: none;
  max-width:54px;
  flex-flow: nowrap row;
  align-items: flex-end;
  cursor: pointer;
    &:focus,
    &:hover {
      color: ${darken(0.2, COLOR.LIGHTGREY)};
    }
  }
  #menuFunc{
    display:none;
  }
`;

export const MenuIconContainer = styled.a`
  margin-left: auto;
  z-index:22;
  @media only screen and (max-width:980px){
    display:flex;
  }
  display: none;
  max-width:54px;
  flex-flow: nowrap row;
  align-items: flex-end;
  cursor: pointer;
  transform: rotateZ(0deg);
  transition: transform 0.6s ease-in-out;
    &:focus,
    &:hover {
      color: ${darken(0.2, COLOR.LIGHTGREY)};
    }
  }
  #menuFunc{
    display:none;
  }
  &.active{
    transform: rotateZ(90deg);
    transition: transform 0.6s ease-in-out;
  }
`;

export const Navigation = styled.div`
  margin-left: auto;
  @media only screen and (max-width: 980px) {
    display: none;
  }
  display: flex;
  flex-flow: nowrap row;
  align-items: flex-end;

  & > * {
    margin-left: 1rem;
    color: ${COLOR.LIGHTGREY};
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    &:focus,
    &:hover {
      color: ${darken(0.2, COLOR.LIGHTGREY)};
    }
  }

  & > *:first-child {
    margin-left: 0;
  }
`;

export const MobileNavigation = styled.div`
  @media only screen and (min-width: 980px) {
    display: none;
  }
  z-index: 20;
  margin-left: auto;
  display: flex;
  position: fixed;
  background-color: ${COLOR.VOSS_GREEN};
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);
  transition: transform 0.6s ease-in-out;

  & > * {
    font-size: 2em;
    opacity: 0;
    color: ${COLOR.LIGHTGREY};
    transition: all 0.2s ease-in-out;
    &:focus,
    &:hover {
      color: ${darken(0.2, COLOR.LIGHTGREY)};
    }
  }

  &.active > * {
    transition:all 0.2s ease-in-out;
    opacity: 1;
  }

  & > *:first-child {
    margin-left: 0;
  }

  &.active {
    @media only screen and (min-width: 980px) {
      display: none;
    }
    display: flex;
    transform: translateY(0%);
  }
`;
