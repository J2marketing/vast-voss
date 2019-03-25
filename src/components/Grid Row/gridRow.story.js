import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import  { Cell, Grid } from "styled-css-grid";
import { defaultParameters, documentationConfig } from '../../../.storybook/constants';



const story = storiesOf('Components | Grid Row', module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo)
  .addParameters(defaultParameters);
  
story.add('Grid Row Component 3 Column', () => 
    <Grid columns={3}>
        <Cell>Test</Cell>
        <Cell>Test2</Cell>
        <Cell>Test3</Cell>
    </Grid>, documentationConfig);

story.add('Grid Row Component 5 Column', () => 
    <Grid columns={5}>
        <Cell>Test</Cell>
        <Cell>Test2</Cell>
        <Cell>Test3</Cell>
        <Cell>Test4</Cell>
        <Cell>Test5</Cell>
    </Grid>, documentationConfig);

story.add('Grid Row Responsive 120px', () =>
    <Grid columns={"repeat(auto-fit,minmax(120px,1fr))"}>
        <Cell>Test</Cell>
        <Cell>Test2</Cell>
        <Cell>Test3</Cell>
        <Cell>Test4</Cell>
        <Cell>Test5</Cell>
        <Cell>Test6</Cell>
        <Cell>Test7</Cell>
        <Cell>Test8</Cell>
    </Grid>, documentationConfig);
