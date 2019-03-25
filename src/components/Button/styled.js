import styled from 'styled-components';
import { darken } from 'polished';
import { ResetStyle } from '../Reset';
import { COLOR } from '../../constants';

export const ButtonWrapper = styled.button`
  font-family:'Lato',sans-serif;
  font-weight:900;
  font-size:20px;
  padding: 0.4rem 0.8rem;
  border-radius: 0px;
  border: 2px solid ${props => props.theme.border};
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.text};
  transition: all 300ms ease-in-out;
  &:hover {
    cursor:pointer;
    transition: all 300ms ease-in-out;
    border: 2px solid ${props => props.theme.border};
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.main};
  }
`;



