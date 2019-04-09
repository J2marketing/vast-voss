import React from 'react';
import { Cell, Grid } from 'styled-css-grid';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { transparent } from '../constants';
import vossLogo from '../assets/vossHeaderLogo.png';
import { InnerContainerBoxed } from '../components/InnerContainerBoxed';
import { InnerContainerFull } from '../components/InnerContainerFull';

const IndexPage = () => (
  <Layout>
    <InnerContainerFull>
      <div className="fullHeader">
        <div className="heroImage">
          <img alt="VOSS Oil spill solutions logo" src={vossLogo} />
        </div>
        <div className="buttonCTAs">
          <Button themeBtn={transparent}>Explore Solutions</Button>
          <Button themeBtn={transparent}>Our Company</Button>
        </div>
      </div>
    </InnerContainerFull>
    <InnerContainerFull isWavyTop isWavyBottom>
      <InnerContainerBoxed>
        <Grid columns="repeat(auto-fit,minmax(200px,1fr))">
          <Cell className="debug">Test</Cell>
          <Cell className="debug">Test2</Cell>
          <Cell className="debug">Test3</Cell>
        </Grid>
      </InnerContainerBoxed>
    </InnerContainerFull>
  </Layout>
);

export default IndexPage;
