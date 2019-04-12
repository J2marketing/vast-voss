import React from 'react';
import { Layout } from '../components/Layout';
import { InnerContainerFull } from '../components/InnerContainerFull';
import { Button } from '../components/Button';
import { transparent } from '../constants';
import vossIcon from '../assets/vossIcon.png';

const SecondPage = () => (
  <Layout>
    <InnerContainerFull id="contact">
      <div className="fullHeader fullPage">
        <div className="heroImage">
          <img className="smallLogo" alt="VOSS Oil spill solutions logo" src={vossIcon} />
        </div>
        <h3 className="largeHeader">Thanks for reaching out! We will be in touch.</h3>
        <Button theme={transparent} href="/">
          {' '}
          Back Home
        </Button>
      </div>
    </InnerContainerFull>
  </Layout>
);

export default SecondPage;
