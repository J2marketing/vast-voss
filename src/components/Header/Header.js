import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../assets/vossLogoWhite.png'
import { Container } from '../Container';
import { HeaderWrapper, HeaderInner, Navigation, SiteImg } from './styled';

const Header = ({ title, navigation }) => (
  <HeaderWrapper>
    <Container>
      <HeaderInner>
        <SiteImg src={Logo} />
        {navigation && <Navigation>{navigation}</Navigation>}
      </HeaderInner>
    </Container>
  </HeaderWrapper>
);

Header.propTypes = {
  /** Title for the site */
  title: PropTypes.string,
  /** Array of navigation items */
  navigation: PropTypes.arrayOf(PropTypes.node),
};

Header.defaultProps = {
  title: null,
  navigation: null,
};

export { Header };
