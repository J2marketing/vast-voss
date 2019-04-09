import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import { defaultParameters, documentationConfig } from '../../../.storybook/constants';
import { InnerContainerBoxed } from './index';

const story = storiesOf('Components|InnerContainerBoxed', module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo)
  .addParameters(defaultParameters);

story.add('InnerContainerBoxed Component', () => <InnerContainerBoxed isDebug />, documentationConfig);
