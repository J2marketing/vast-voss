import styled from 'styled-components';
import { darken } from 'polished';
import { COLOR } from '../../constants';

export const HeaderWrapper = styled.div`
  background-color: ${COLOR.VOSS_GREEN};
  border-bottom: 0.2rem solid ${darken(0.1, COLOR.VOSS_GREEN)};
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-flow: nowrap row;
  align-items:center;
  max-height:15vh;
`;

export const SiteImg = styled.img.attrs({
  src: props => props.srcRef
})`
  margin: 0;
  max-height:60px;
`;

export const Navigation = styled.div`
  margin-left: auto;
  @media only screen and (max-width:980px){
    display:none;
  }
  display: flex;
  flex-flow: nowrap row;
  align-items: flex-end;

  & > * {
    margin-left: 1rem;
    color: ${COLOR.WHITE};
    cursor: pointer;

    &:focus,
    &:hover {
      color: ${darken(0.2, COLOR.WHITE)};
    }
  }

  & > *:first-child {
    margin-left: 0;
  }
`;

export const MobileNavigation = styled.div`
  @media only screen and (max-width:980px){
    display: flex;
  }
  margin-left: auto;
  display: none;
  flex-flow: nowrap row;
  align-items: flex-end;

  & > * {
    margin-left: 1rem;
    color: ${COLOR.WHITE};
    cursor: pointer;

    &:focus,
    &:hover {
      color: ${darken(0.2, COLOR.WHITE)};
    }
  }

  & > *:first-child {
    margin-left: 0;
  }
`;
