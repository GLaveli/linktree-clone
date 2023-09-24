import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
display: flex;
height: 100vh;

@media (max-width: 768px) {
  flex-direction: column;
}
`;


export const Nav = styled.nav`
  position: absolute; // Adicionado
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background-color: #2c3e50;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding-top: 50px;
  transform: translateX(${props => (props.open ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 1000; // Garante que o menu apareça sobre outros conteúdos

  @media (max-width: 768px) {
    flex: 0 0 auto;
  }
`;


export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Li = styled.li`
  margin-bottom: 15px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ecf0f1;
  font-size: 18px;
  transition: color 0.3s ease;
  display: block;
  padding: 10px 15px;

  &:hover {
    color: #3498db;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ecf0f1;
`;

// ... (outros estilos)

export const MenuButton = styled.button`
  display: none; // Esconder por padrão em telas maiores
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  position: absolute;
  top: 15px;
  left: 15px; // Ajuste conforme necessário
  z-index: 2000; // Aumentando o z-index para garantir que ele apareça no topo

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #3498db;
    margin: 4px 0;
    transition: 0.4s;
  }

  &:hover div {
    background-color: #fff;
  }
`;
