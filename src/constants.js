export const COLOR = {
  WHITE: '#f1f1f1',
  GREY: '#d7d7d7',
  BLACK: '#000000',
  BLUE: '#1a58cc',
  VOSS_GREEN: '#195942',
  VOSS_GREEN_LIGHT: '#2a966f',
  VOSS_GREEN_TRANSPARENT: 'rgba(25,89,66, 0.8)',
  TRANSPARENT: 'rgba(0,0,0,0)',
};

export const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/oldindex', label: 'Introduction' },
  { to: '/page-2', label: 'Mission' },
  { to: '/mdx-example', label: 'Technology' },
  { href: '/docs/', label: 'Contact' },
];

export const themeNormal = {
  main: COLOR.VOSS_GREEN,
  border: COLOR.VOSS_GREEN,
  text: COLOR.WHITE,
  mainHov: COLOR.WHITE,
  borderHov: COLOR.VOSS_GREEN,
  textHov: COLOR.VOSS_GREEN,
};

export const inverted = {
  main: COLOR.WHITE,
  border: COLOR.VOSS_GREEN,
  text: COLOR.VOSS_GREEN,
  mainHov: COLOR.VOSS_GREEN,
  borderHov: COLOR.VOSS_GREEN,
  textHov: COLOR.WHITE,
};

export const transparent = {
  main: COLOR.TRANSPARENT,
  border: COLOR.WHITE,
  text: COLOR.WHITE,
  mainHov: COLOR.VOSS_GREEN,
  borderHov: COLOR.VOSS_GREEN,
  textHov: COLOR.WHITE,
};
