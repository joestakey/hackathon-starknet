import React from 'react';
import {
  BackgroundOverlay,
  HamburgerMenu,
  HeaderContainer,
  HeaderHeader,
  HeaderLogo,
  IconBurger,
  MenuOverlay,
  NavDesktop,
  NavDesktopUl,
  NavDesktopLi,
  NavDesktopLink,
  NavMobile,
  NavSide,
  HeaderLogoContainer
} from './HeaderElements';
import { Link } from 'react-router-dom';
import img1 from '../../Images/HarpyLogo.png';
import img2 from '../../Images/user.png';

const Header = ({ isOpen, toggle}) => {
  return (
    <HeaderHeader>
      {isOpen && <BackgroundOverlay></BackgroundOverlay>}
      <HeaderContainer>
        <HeaderLogoContainer>
          <HeaderLogo>
            <NavDesktopLink to='/'>
              <img src={img1} />
            </NavDesktopLink>
          </HeaderLogo>
          <NavDesktopLink to='/'>
            <h1>Harpey</h1>
          </NavDesktopLink>
        </HeaderLogoContainer>

        <NavDesktop>
          <NavDesktopUl>
            <NavDesktopLi>
              <NavDesktopLink to='/upload'>Upload</NavDesktopLink>
            </NavDesktopLi>
            <NavDesktopLi>
              <NavDesktopLink to='/browse'>Browse</NavDesktopLink>
            </NavDesktopLi>
          </NavDesktopUl>
        </NavDesktop>
        <NavMobile>
          <HamburgerMenu onClick={toggle}>
            <IconBurger isOpen={isOpen}></IconBurger>
            <IconBurger isOpen={isOpen}></IconBurger>
            <IconBurger isOpen={isOpen}></IconBurger>
          </HamburgerMenu>
        </NavMobile>
        <NavSide isOpen={isOpen}>
          <NavDesktopUl>
            <NavDesktopLi>
              <NavDesktopLink to='/upload' onClick={toggle}>
                Upload
              </NavDesktopLink>
            </NavDesktopLi>
            <NavDesktopLi>
              <NavDesktopLink to='/browse' onClick={toggle}>
                Browse
              </NavDesktopLink>
            </NavDesktopLi>
          </NavDesktopUl>
        </NavSide>
      </HeaderContainer>
    </HeaderHeader>
  );
};

export default Header;
