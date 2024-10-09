import Nav from 'react-bootstrap/Nav';

function Header() {
  return (<>
  <h1>Matthew Weigandt</h1>
    <Nav defaultActiveKey="/" className="flex-column">
      <Nav.Link href="/aboutme"  onClick={() => handlePageChange('About')}>About Me</Nav.Link>
      <Nav.Link href="/project"  onClick={() => handlePageChange('Project')}>Projects</Nav.Link>
      <Nav.Link href="/resume"  onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
      <Nav.Link href="/contact" onClick={() => handlePageChange('Home')}>
        Contact ME
      </Nav.Link>
    </Nav>
  </>);
}

export default Header;