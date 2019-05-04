import React, { Component } from 'react'
import DropList from './DropList'
import AutoComplete from '../autoComplete/AutoCompleteContainer'
import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from 'react-bootstrap'
import jumpTo from '../../modules/Navigation'
import Auth from '../../modules/Auth'
import styles from './header.module.sass'

let search_text = ''

export default class Header extends Component {
  render() {
    const {user_token,
  departments,
  search,
  getProductsByCategory,
  getAllProducts} = this.props
    return (
      <div className={styles.outbox}>
        <div className={styles.left}>
          <div className={styles.logo}
            onClick={() => {
              getAllProducts()
              jumpTo('/dashboard')
            }}
          >
            Zack Yin
          </div>

        </div>
        <div className={styles.right}>
          {/* search input */}
          <div className={styles.search}>
            <AutoComplete style={{ width: '10rem' }} />
            <button
              className={styles.btn}
              onClick={() => {
                search(search_text).then(res => jumpTo('/dashboard'))
              }}
            >
              Search
            </button>
            {/* lists */}
            <div className={styles.lists}>
              {/* departments */}
              {departments && departments.map(d =>
                <DropList
                  key={d.departmentName}
                  clickCategory={(c) => getProductsByCategory(c)}
                  department={d.departmentName}
                  categories={d.categories.split(',')}
                />
              )}
              <div className={styles.link}>
                All Product
              </div>
              <div className={styles.link}>
                Shopping Bag
              </div>
              <div className={styles.loggout}>
                <NavDropdown title={`hello, ${user_token.user_name}`}>
                  <NavDropdown.Item onClick={Auth.logout} href='/'>
                    logout
               </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}


// let search_text = ''
// export default function Header({
//   user_token,
//   departments,
//   search,
//   getProductsByCategory,
//   getAllProducts,
// }) {
//   return (
//     <Navbar expand="lg" 
//     // className={`fixed-top ${styles.navbar}`}
//     className={styles.navbar}
//     >
//       {/* logo */}
//       <Navbar.Brand
//         onClick={() => {
//           getAllProducts()
//           jumpTo('/dashboard')
//         }}
//       >
//         <div className={styles.logo}>
//           Zack Market
//         </div>
//       </Navbar.Brand>
//       {/* dropdowns */}
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse className={styles.content} id="basic-navbar-nav" >
//         {/* search bar */}
//         <Form inline className={`mt-5 mt-lg-0 ml-lg-5 ${styles.search}`} >
//           {/* <FormControl type="text" placeholder="Search" className="mr-3" onChange={(e)=>{search_text = e.target.value}} /> */}
//           <AutoComplete style={{width:'10rem'}} />
//           <Button
//             type="button"
//             className={styles.btn}
//             onClick={() => {
//               search(search_text).then(res => jumpTo('/dashboard'))
//             }}
//           >
//             Search
//            </Button>
//         </Form>
//         <Nav variant="pills" className={`ml-auto ${styles.lists}`} >
//           {departments && departments.map(d =>
//             <DropList
//               key={d.departmentName}
//               clickCategory={(c) => getProductsByCategory(c)}
//               department={d.departmentName}
//               categories={d.categories.split(',')}
//             />
//           )}
//           <Nav.Item>
//             <Nav.Link
//               onClick={() => {
//                 getAllProducts()
//                 jumpTo('/dashboard')
//               }}
//             >
//               All Product
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link onClick={() => jumpTo('/bag')}>Shopping Bag</Nav.Link>
//           </Nav.Item>
//           <NavDropdown title={`hello, ${user_token.user_name}`}>
//             <NavDropdown.Item onClick={Auth.logout} href='/'>
//               logout
//               </NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   )
// }



