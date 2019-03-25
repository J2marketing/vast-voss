import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ButtonWrapper } from './styled';

export const Button = ({ children, ...props}) => (
  <ThemeProvider theme={props.themeBtn}>
    <ButtonWrapper type="button" {...props}>
      {children}
    </ButtonWrapper>
  </ThemeProvider>
);
