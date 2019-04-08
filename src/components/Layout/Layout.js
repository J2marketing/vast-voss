import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';

import { Header } from '../Header';
import { Container } from '../Container';
import { ResetStyle } from '../Reset';
import { NAV_ITEMS } from '../../constants';
import { createGlobalStyle } from "styled-components";

//Need to find a better way to inject global styles. Better yet, TODO: make a seperate header styled component. Allow it to accept image prop.
const GlobalStyle = createGlobalStyle`
  .fullHeader{
    min-height:85vh;
    background-image: url(${require('../../assets/vossBgHeaderDarkNoBoat.jpg')});
    background-size: cover;
    background-position: center;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  }
  .fullHeader img{
    max-width:50vw;
  }
  .buttonCTAs{
    display:flex;
    & button{
      margin:10px;
    }
  }
  .debug{
    background-color:red;
  }
`;

const Layout = ({ children }) => {
  const navigationItems = NAV_ITEMS.map(({ to, href, label }) => {
    if (href) {
      return (
        <a key={label} href={href}>
          {label}
        </a>
      );
    }

    return (
      <Link key={label} to={to}>
        {label}
      </Link>
    );
  });

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <ResetStyle />
          <GlobalStyle />
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
          >
            <html lang="en" />
          </Helmet>
          <Header  navigation={navigationItems} />
          <Container>{children}</Container>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
