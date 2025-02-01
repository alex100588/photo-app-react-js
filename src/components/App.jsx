import { NavLink, Outlet } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand>Photo App</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </Nav>
      </Navbar>
      <Outlet />
    </>
  );
};

export default App;
