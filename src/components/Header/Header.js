import React from 'react';
import { Link } from 'gatsby';
import { InnerContainerBoxed } from '../InnerContainerBoxed';
import {
  MenuIconContainer,
  HeaderWrapper,
  HeaderInner,
  Navigation,
  MobileNavigation,
  SiteImg,
  MenuIcon,
} from './styled';
import { NAV_ITEMS } from '../../constants';
import menuIcon from '../../assets/menuIcon.png';
import vossLogoWhite from '../../assets/vossLogoWhite.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuShown: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      menuShown: !prevState.menuShown,
    }));
  }

  render() {
    const navigation = NAV_ITEMS.map(({ to, href, label }) => {
      if (href) {
        return (
          <a key={label} href={href} onClick={this.handleClick}>
            {label}
          </a>
        );
      }

      return (
        <Link key={label} to={to} onClick={this.handleClick}>
          {label}
        </Link>
      );
    });

    const { menuShown } = this.state;
    return (
      <HeaderWrapper>
        <InnerContainerBoxed padding="0rem 0rem">
          <HeaderInner>
            <Link to="/">
              <SiteImg alt="VOSS Oil Spill Solutions Logo Full" src={vossLogoWhite} />
            </Link>
            {navigation && (
              <Navigation role="tablist" id="desktopNav">
                {navigation}
              </Navigation>
            )}
            <MenuIconContainer id="menuFunc" className={menuShown ? 'active' : ''} onClick={this.handleClick}>
              <MenuIcon className="menuIcon" src={menuIcon} />
            </MenuIconContainer>
            {navigation && (
              <MobileNavigation
                aria-hidden={menuShown ? 'false' : 'true'}
                className={menuShown ? 'mobileMenu active' : 'mobileMenu'}
                id="mobileNav"
              >
                {navigation}
              </MobileNavigation>
            )}
          </HeaderInner>
        </InnerContainerBoxed>
      </HeaderWrapper>
    );
  }
}

export { Header };
