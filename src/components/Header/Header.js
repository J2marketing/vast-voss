import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../Container';
import { InnerContainerBoxed } from '../InnerContainerBoxed';
import { HeaderWrapper, HeaderInner, Navigation, SiteImg } from './styled';



const Header = ({ logo, navigation }) => (
  <HeaderWrapper>
    <InnerContainerBoxed>
      <HeaderInner>
        <SiteImg srcRef={require("../../assets/vossLogoWhite.png")} />
        {navigation && <Navigation>{navigation}</Navigation>}
      </HeaderInner>
    </InnerContainerBoxed>
  </HeaderWrapper>
);

Header.propTypes = {
  /** Title for the site */
  logo: PropTypes.string,
  /** Array of navigation items */
  navigation: PropTypes.arrayOf(PropTypes.node),
};

Header.defaultProps = {
  logo: '../../assets/vossLogoWhite.png',
  navigation: null,
};

export { Header };
