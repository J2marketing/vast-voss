import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ButtonWrapper } from './styled';
import { themeNormal } from '../../constants';

export const Button = ({ children, themeBtn, ...props }) => (
  <ThemeProvider theme={themeBtn}>
    <ButtonWrapper type="button" {...props}>
      {children}
    </ButtonWrapper>
  </ThemeProvider>
);

Button.propTypes = {
  children: PropTypes.element,
  themeBtn: PropTypes.shape({
    main: PropTypes.string.isRequired,
    border: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    mainHov: PropTypes.string.isRequired,
    borderHov: PropTypes.string.isRequired,
    textHov: PropTypes.string.isRequired,
  }),
};

Button.defaultProps = {
  children: 'Button',
  themeBtn: themeNormal,
};
