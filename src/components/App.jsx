import { Outlet, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Navbar bg="light" variant="light" className="ps-5">
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
}

export default App;