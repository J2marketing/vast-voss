import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../Container';
import { Logo } from '../../assets/vossLogoWhite.png';
import { HeaderWrapper, HeaderInner, Navigation, SiteImg } from './styled';



const Header = ({ logo, navigation }) => (
  <HeaderWrapper>
    <Container>
      <HeaderInner>
        <SiteImg src={logo} />
        {navigation && <Navigation>{navigation}</Navigation>}
      </HeaderInner>
    </Container>
  </HeaderWrapper>
);

Header.propTypes = {
  /** Title for the site */
  logo: PropTypes.string,
  /** Array of navigation items */
  navigation: PropTypes.arrayOf(PropTypes.node),
};

Header.defaultProps = {
  logo: Logo,
  navigation: null,
};

export { Header };
