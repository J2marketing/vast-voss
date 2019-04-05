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
    <InnerContainerBoxed>
      <p>
        <strong>Thanks for using awesome-gatsby-starter!</strong> Remember to{' '}
        <a href="https://github.com/South-Paw/awesome-gatsby-starter">drop a ⭐ on the project</a> if you find it useful.
      </p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </InnerContainerBoxed>
  </Layout>
);

export default IndexPage;
