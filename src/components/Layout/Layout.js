import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Logo } from '../../assets/vossLogoWhite.png'
import { Header } from '../Header';
import { Container } from '../Container';
import { ResetStyle } from '../Reset';
import { NAV_ITEMS } from '../../constants';
import { createGlobalStyle } from "styled-components";

//Need to find a better way to inject global styles. Better yet, TODO: make a seperate header styled component
const GlobalStyle = createGlobalStyle`
  .fullHeader{
    background-color:black;
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
