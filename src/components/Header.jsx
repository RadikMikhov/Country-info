import styled from 'styled-components';
import { Container } from './Container';
import { useState, useEffect } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5'
import { Link } from 'react-router-dom';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`;

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 15px 0;
   color: var(--color-text);
   font-size: var(--fs-sm);
   font-weight: var(--fw-bold);
`;

const Title = styled(Link).attrs({
   to: '/',
})`
   color: var(--color-text);
   text-decoration: none;
`;

const ModeSwitcher = styled.div`
   cursor: pointer;
   text-transform: capitalize;
`;

const Header = () => {
   const [theme, setTheme] = useState('light');

   const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

   useEffect(() => {
      document.body.setAttribute('data-theme', theme);
   }, [theme]);
  
   return (
      <HeaderEl>
         <Container>
            <Wrapper>
               <Title>Where is the world?</Title>
               <ModeSwitcher onClick={toggleTheme}>
                  {theme === 'light' ? (
                     <IoSunny size="12px" />
                  ) : (
                     <IoMoon size="12px" />
                  )}
                  <span className='header__icon-span'>{theme} Theme</span>
               </ModeSwitcher>
            </Wrapper>
         </Container>
      </HeaderEl>
   );
};

export default Header;