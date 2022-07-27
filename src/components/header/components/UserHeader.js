import React from 'react'
import styles from '../stylesheets/userHeader.module.sass'
import { NavDropdown } from 'react-bootstrap'
import Auth from '../../../modules/Auth'
import jumpTo from '../../../modules/Navigation'

export default function UserHeader({ user_token }) {
  return (
    <div className={styles.outbox}>
      <div className={styles.tag} onClick={() => jumpTo('/bag')}>
        CART
      </div>
      {(user_token && Object.keys(user_token).length > 0)
        ?
        <div className={styles.loggout}>
          <NavDropdown title={`Hola ${user_token.user_name}`}>
            <NavDropdown.Item onClick={Auth.logout} href='/'>
              Salir
             </NavDropdown.Item>
             <NavDropdown.Item onClick={() => jumpTo('/ingrese')}>
              Ingresar Producto
             </NavDropdown.Item>
          </NavDropdown>
        </div>
        : 
        <div className={styles.loggout}>
          <div className={styles.login} onClick={() => jumpTo('/login')}>
            Ingresar
        </div>
        </div>
      }
    </div>
  )
}
