const SidebarContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Nav = styled.nav`
  flex: 0 0 250px;
  background-color: #2c3e50;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  margin-bottom: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ecf0f1;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ecf0f1;
`;