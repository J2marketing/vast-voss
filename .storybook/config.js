import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import vossTheme from './vossTheme';
import GlobalStyleDecorator from './components/GlobalStyleDecorator';

const req = require.context('../src', true, /.story.js$/);

const loadStories = () => req.keys().forEach(filename => req(filename));

// If you'd like to add global styles to all stories, modify this component.
addDecorator(GlobalStyleDecorator);

// If you'd like to customize your storybook instance. See: https://github.com/storybooks/storybook/tree/next/addons/options
addDecorator(withOptions({
  theme: vossTheme,
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
}));

configure(loadStories, module);
