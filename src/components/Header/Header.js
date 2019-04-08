import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../Container';
import { InnerContainerBoxed } from '../InnerContainerBoxed';
import { MenuIconContainer, HeaderWrapper, HeaderInner, Navigation, MobileNavigation, SiteImg, MenuIcon } from './styled';
import menuIcon from '../../assets/menuIcon.png';
import vossLogoWhite from '../../assets/vossLogoWhite.png';



class Header extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    console.log("testing");
  }

  render(){
    return(
      <HeaderWrapper>
        <InnerContainerBoxed>
          <HeaderInner>
            <SiteImg src={vossLogoWhite} />
            {this.props.navigation && <Navigation id="desktopNav">{this.props.navigation}</Navigation>}
            <MenuIconContainer className="menuFunc" onClick={this.handleClick}>
              <MenuIcon className="menuIcon" src={menuIcon}/>
            </MenuIconContainer>
            {this.props.navigation && 
            <MobileNavigation id="mobileNav">
              {this.props.navigation}
            </MobileNavigation>}
          </HeaderInner>
        </InnerContainerBoxed>
      </HeaderWrapper>
    )
  }
  
}

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
