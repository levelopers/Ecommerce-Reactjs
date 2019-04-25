import styles from './header.module.sass'
import React from 'react'
import DropList from './DropList'
import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from 'react-bootstrap'
import jumpTo from '../../modules/Navigation'
import Auth from '../../modules/Auth'


let search_text = ''
export default function Header({
  user_token,
  departments,
  search,
  getProductsByCategory,
  getAllProducts,
  search_result
}) {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      {/* logo */}
      <Navbar.Brand
        onClick={() => {
          getAllProducts()
          jumpTo('/dashboard')
        }}
      >
        <div style={logo_style}>
          Zack Market
        </div>
      </Navbar.Brand>
      {/* search bar */}
      <Form inline className="ml-5">
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={handleChange} />
        <Button
          type="button"
          onClick={() => {
            search(search_text).then(res => jumpTo('/dashboard'))
          }}
        >
          Search
           </Button>
      </Form>
      {/* lists and dropdowns */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="pills" className="ml-auto" style={list_style}>
          {departments && departments.map(d =>
            <DropList
              key={d.departmentName}
              clickCategory={(c) => getProductsByCategory(c)}
              department={d.departmentName}
              categories={d.categories.split(',')}
            />
          )}
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                getAllProducts()
                jumpTo('/dashboard')
              }}
            >
              All Product
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => jumpTo('/bag')}>Shopping Bag</Nav.Link>
          </Nav.Item>
          <NavDropdown title={`hello, ${user_token.user_name}`}>
            <NavDropdown.Item onClick={Auth.logout} href='/'>
              logout
              </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

function handleChange(e) {
  search_text = e.target.value
}

var logo_style = {
  width: '120px',
  height: '100%',
  background: 'orange'
}
var list_style = {
  "color": 'blue'
}

