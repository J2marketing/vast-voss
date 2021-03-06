import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { defaultParameters, documentationConfig } from '../../../.storybook/constants';
import { Header } from './index';
import { Logo } from '../../assets/vossLogoWhite.png';

const props = {
  logo: Logo,
};

const story = storiesOf('Components|Header', module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo)
  .addParameters(defaultParameters);

story.add('Header Component', () => <Header {...props} />, documentationConfig);
