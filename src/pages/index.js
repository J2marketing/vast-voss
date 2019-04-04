import React from 'react';
import { Link } from 'gatsby';
import  { Cell, Grid } from "styled-css-grid";
import { Layout } from '../components/Layout';
import Image from './image';
import { InnerContainerBoxed } from '../components/InnerContainerBoxed';
import { InnerContainerFull } from '../components/InnerContainerFull';

const IndexPage = () => (
  <Layout>
    <InnerContainerFull>
      <Grid className="fullHeader" columns={3}>
          <Cell>Test</Cell>
          <Cell>Test2</Cell>
          <Cell>Test3</Cell>
      </Grid>
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
