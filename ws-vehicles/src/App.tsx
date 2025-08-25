import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { VehiclesProvider } from './contexts/VehiclesContext';
import { VehicleList } from './components/VehicleList/VehicleList';
import { AddVehicle } from './pages/AddVehicle';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Nav = styled.nav`
  background-color: #34495e;
  padding: 10px 0;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-weight: 500;

  &:hover {
    background-color: #3d566e;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Footer = styled.footer`
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 15px;
  margin-top: auto;
`;

const App: React.FC = () => {
  return (
    <VehiclesProvider>
      <Router>
        <AppContainer>
          <Header>
            <h1>Catálogo de Veículos</h1>
          </Header>
          
          <Nav>
            <NavList>
              <NavItem>
                <StyledLink to="/">Lista de Veículos</StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="/adicionar">Adicionar Veículo</StyledLink>
              </NavItem>
            </NavList>
          </Nav>

          <MainContent>
            <Routes>
              <Route path="/" element={<VehicleList />} />
              <Route path="/adicionar" element={<AddVehicle />} />
            </Routes>
          </MainContent>

          <Footer>
            <p>© {new Date().getFullYear()} Catálogo de Veículos</p>
          </Footer>
        </AppContainer>
      </Router>
    </VehiclesProvider>
  );
};

export default App;