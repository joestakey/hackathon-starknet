import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterFooter = styled.footer`
  padding: 140px 10px 90px;
  color: var(--text-secondary);
  background-color: var(--hero-bg-color);
`;
export const FooterContainer = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  width: 100%;
`;
export const FooterLink = styled(Link)`
  cursor: pointer;
`;

export const FooterImg = styled.img`
  max-width: 100%;
  width: 25rem;
  display: block;
  height: auto;
`;
export const FooterUl = styled.ul`
  margin: 0;
  padding: 0;
  padding-top: 6rem;
  list-style: none;
  position: static;
  top: 30px;
  right: 56px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 111px;

  
`;
export const FooterLi = styled.li`
  margin: 0;
  padding: 0;
  
`;
export const FooterLiLink = styled.a`
  display: block;
  margin: 0 2.5rem;
  cursor: pointer;
  &:hover {
    color: var(--blue);
  }
`;

export const FooterLiImg = styled.img`
  max-width: 100%;
  display: block;
  width: 33px;
`;
export const FooterParagraph = styled.p`
  margin: 0;
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  line-height: 2.2rem;
  text-align: center;
  padding: 2.2rem 1.4rem;
`;