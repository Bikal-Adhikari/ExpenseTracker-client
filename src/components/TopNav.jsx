import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const TopNav = ({ loggedInUser }) => {
  const handelOnLogOut = () => {
    localStorage.removeItem("user");
  };
  return (
    <Navbar expand="md" className="bg-info shadow-lg">
      <Container>
        <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {loggedInUser?._id ? (
              <>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/" onClick={handelOnLogOut}>
                  LogOut
                </Nav.Link>
              </>
            ) : (
              <>
                {" "}
                <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="/signup">Sign up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
