import styled from 'styled-components';
import { darken } from 'polished';
import { ResetStyle } from '../Reset';
import { COLOR } from '../../constants';

export const ButtonWrapper = styled.button`
  padding: 0.4rem 0.8rem;
  border-radius: 0px;
  border: 0.1rem solid ${darken(0.2, COLOR.VOSS_GREEN)};
  background: ${COLOR.VOSS_GREEN};
  color: ${COLOR.WHITE};
`;
