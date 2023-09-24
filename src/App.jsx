import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { SidebarContainer, Nav, Ul, Li, StyledLink, Content, MenuButton } from './globalStyles';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <Router>
      <MenuButton onClick={() => setMenuActive(!menuActive)}>
        <div></div>
        <div></div>
        <div></div>
      </MenuButton>
      <SidebarContainer>
        <Nav open={menuActive}>
          <Ul>
            <Li>
              <StyledLink to="/">Home</StyledLink>
            </Li>
            <Li>
              <StyledLink to="/tree">Tree</StyledLink>
            </Li>
            <Li>
              <StyledLink to="/dash">Dash</StyledLink>
            </Li>
          </Ul>
        </Nav>
        <Content>
          <AppRoutes />
        </Content>
      </SidebarContainer>
    </Router>
  );
}


export default App;
