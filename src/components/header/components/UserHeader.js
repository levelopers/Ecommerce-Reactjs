import React from 'react'
import styles from '../stylesheets/userHeader.module.sass'
import { NavDropdown } from 'react-bootstrap'
import Auth from '../../../modules/Auth'
import jumpTo from '../../../modules/Navigation'

export default function UserHeader({ user_token }) {
  return (
    <div className={styles.outbox}>
      <div className={styles.tag} onClick={()=>jumpTo('/bag')}>
        CART
              </div>
      <div className={styles.loggout}>
        <NavDropdown title={`hello, ${user_token.user_name}`}>
          <NavDropdown.Item onClick={Auth.logout} href='/'>
            logout
               </NavDropdown.Item>
        </NavDropdown>
      </div>
    </div>
  )
}
