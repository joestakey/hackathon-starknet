import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderHeader = styled.header`
  top: 0;
  right: 0;
  left: 0;
  background: var(--bg-header);
  position: relative;
  z-index: 2;
  line-height: 1.5;
  min-height: 5.4rem;

  &:hover {
    color: var(--text);
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 750px;
  height: 5.4rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  color: var(--text-base);
  @media screen and (min-width: 992px) {
    max-width: 970px;
    height: 8rem;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1170px;
  }
`;



export const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 992px) {
    h1 {
      font-size: 3.2rem;
    }
  }
`;
export const HeaderLogo = styled.div`
  display: inline-block;
  cursor: pointer;

  @media screen and (min-width: 992px) {
  }

  img {
    width: 4rem;
    @media screen and (min-width: 992px) {
      width: 6rem;
    }
  }
`;

export const NavMobile = styled.nav`
  display: flex;
  position: relative;
  @media screen and (min-width: 992px) {
    display: none;
  }
`;



export const HamburgerMenu = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  z-index: 10;
`;

export const IconBurger = styled.div`
  width: 3rem;
  height: 0.4rem;
  background: var(--text-base);
  transition: all 0.3s cubic-bezier(0.52, -0.82, 0.5, 1.57);
  border-radius: 3px;
  transform-origin: 1px;

  &:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? `rotate(45deg) translateY(0)` : `rotate(0)`};
  }
  &:nth-child(2) {
    transform: ${({ isOpen }) =>
      isOpen ? `translateX(100%)` : `translateX(0)`};
    opacity: ${({ isOpen }) => (isOpen ? `0` : `1`)};
  }
  &:nth-child(3) {
    transform: ${({ isOpen }) => (isOpen ? `rotate(-45deg)` : `rotate(0)`)};
  }
`;



export const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100rem;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  z-index: 8;
  transition: all 0.3s ease;
`;

export const NavSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 447px;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  height: 20rem;
  background: var(--bg-header);
  color: var(--text);
  border-width: 0;
  top: 0;
  right: 0;
  padding: 4rem;
  transform: ${({ isOpen }) =>
    isOpen ? `translateX(0)` : `translateX(100%)`};
  transition: all 0.3s ease;
  z-index: 9;

  li {
    a {
      &:hover {
        color: var(--text);
      }
    }
  }
`;

export const NavDesktop = styled.nav`
  display: none;
  @media screen and (min-width: 992px) {
    display: inline-block;
  }
`;

export const NavDesktopUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 1rem;
  color: var(--text-base);

  @media screen and (min-width: 992px) {
    flex-direction: row;
    padding: 0;
  }
`;

export const NavDesktopLi = styled.li`
  display: inline-block;
  font-size: 1.6rem;
  margin: 2rem 0;
  line-height: inherit;
  letter-spacing: 0;
  @media screen and (min-width: 992px) {
    margin: 0 1.6rem 0;
  }
`;

export const NavDesktopLink = styled(Link)`
  display: block;
  text-decoration: none;
  &:hover {
    color: var(--text);
  }
`;
