import React from 'react';
import { Link } from 'gatsby';
import  { Cell, Grid } from "styled-css-grid";
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import Image from './image';
import { themeNormal, inverted, transparent } from '../constants'
import vossLogo from '../assets/vossHeaderLogo.png'
import { InnerContainerBoxed } from '../components/InnerContainerBoxed';
import { InnerContainerFull } from '../components/InnerContainerFull';

const IndexPage = () => (
  <Layout>
    <InnerContainerFull>
      <div className="fullHeader">
          <div className="heroImage">
            <img src={vossLogo} />
          </div>
          <div className="buttonCTAs">
            <Button themeBtn={transparent} children={'Explore Solutions'} onClick={() => alert('Great job clicking that button!')}/>
            <Button themeBtn={transparent} children={'Explore Even More Solutions'} onClick={() => alert('Great job clicking that button!')}/>
          </div>
      </div>
    </InnerContainerFull>
    <InnerContainerFull isWavyTop isWavyBottom>
      <InnerContainerBoxed>
        <Grid columns={"repeat(auto-fit,minmax(200px,1fr))"}>
          <Cell className="debug">Test</Cell>
          <Cell className="debug">Test2</Cell>
          <Cell className="debug">Test3</Cell>
        </Grid>
      </InnerContainerBoxed>
    </InnerContainerFull>
  </Layout>
);

export default IndexPage;
