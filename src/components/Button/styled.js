import styled from 'styled-components';

export const ButtonWrapper = styled.a`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 20px;
  text-align:center;
  padding: 0.4rem 0.8rem;
  border-radius: 0px;
  border: 2px solid ${props => props.theme.border};
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.text};
  transition: all 300ms ease-in-out;
  &:hover {
    cursor: pointer;
    transition: all 300ms ease-in-out;
    border: 2px solid ${props => props.theme.borderHov};
    background-color: ${props => props.theme.mainHov};
    color: ${props => props.theme.textHov};
  }
`;
