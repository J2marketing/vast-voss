import { create } from '@storybook/theming';
import logo from '../src/assets/vossLogoWhite.png';

export default create({
  base: 'dark',

  colorPrimary: '#195942',
  colorSecondary: '#64cfa6',

  // UI
  appBg: '#195942',
  appContentBg: '#1e3d31',
  appBorderColor: '#64cfa6',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '#64cfa6',
  barBg: '#195942',

  // Form colors
  inputBg: 'white',
  inputBorder: '#64cfa6',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  brandTitle: null,
  brandUrl: 'https://example.com',
  brandImage: logo,
});