import React from 'react';
import { InnerContainerFull } from '../components/InnerContainerFull';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { transparent } from '../constants';

const NotFoundPage = () => (
  <Layout>
    <InnerContainerFull id="contact">
      <div className="fullHeader fullPage">
        <h3 className="largeHeader">Woah there, looks like you found a page that doesn't exist!</h3>
        <Button theme={transparent} href="/">
          {' '}
          Back Home
        </Button>
      </div>
    </InnerContainerFull>
  </Layout>
);

export default NotFoundPage;
