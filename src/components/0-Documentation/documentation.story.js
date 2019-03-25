import React from 'react';
import { storiesOf } from '@storybook/react';

import vossLogo from '../../assets/vossGreen.png';

const story = storiesOf('VOSS UI KIT', module);

story.add('Information', () => (
  <>
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img src={vossLogo} alt="Gatsby Astronaut" style={{ width: '300px', marginBottom: '1rem' }} />
      <h1>VOSS UI Library</h1>
      <p>
        <strong>Welcome to the VOSS component library. Usage of all VOSS site components is detailed here.</strong>
        <br />
      </p>
    </div>
  </>
));
