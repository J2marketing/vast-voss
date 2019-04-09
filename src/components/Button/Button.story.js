import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { defaultParameters, documentationConfig } from '../../../.storybook/constants';
import { Button } from './index';
import { themeNormal, inverted } from '../../constants';

const props = {
  children: 'Explore Solutions',
  onClick: () => alert('Great job clicking that button!'), // eslint-disable-line no-alert
};

const story = storiesOf('Components|Button', module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo)
  .addParameters(defaultParameters);

story.add('Button Normal', () => <Button themeBtn={themeNormal} {...props} />, documentationConfig);
story.add('Button Inverted', () => <Button themeBtn={inverted} {...props} />, documentationConfig);
