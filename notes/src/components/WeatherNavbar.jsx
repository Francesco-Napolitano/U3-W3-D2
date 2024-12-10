import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const WeatherNavbar = (props) => {
  const location = useLocation()

  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    props.onSearch(searchQuery.toUpperCase())
    navigate('/search')
    setSearchQuery('')
  }

  return (
    <Navbar expand={false}>
      <Container fluid>
        <Navbar.Brand>
          <img
            src="https://cdn-icons-png.flaticon.com/512/678/678310.png"
            alt="sun and rainbow logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto my-2 my-lg-0">
          <Link
            to="/"
            className={
              location.pathname === '/' ? 'nav-link active' : 'nav-link'
            }
          >
            <div>Home</div>
          </Link>
          <Link
            to="/favourites"
            className={
              location.pathname === '/favourites'
                ? 'nav-link active'
                : 'nav-link'
            }
          >
            <div>Favourites</div>
          </Link>
        </Nav>
        <Form className="d-flex" onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Search your city :)"
            className="me-2"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
            }}
          />
          <Button variant="info">Search</Button>
        </Form>
      </Container>
    </Navbar>
  )
}

export default WeatherNavbar
