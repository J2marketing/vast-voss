import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Header } from '../Header';
import { Container } from '../Container';
import { ResetStyle } from '../Reset';
import { NAV_ITEMS } from '../../constants';

// This needs changed the second this is more than a one page site. Need to find a better way to inject global styles. Better yet, TODO: make a seperate header styled component. Allow it to accept image prop.

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
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
          >
            <html lang="en" />
          </Helmet>
          <Header navigation={navigationItems} />
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
