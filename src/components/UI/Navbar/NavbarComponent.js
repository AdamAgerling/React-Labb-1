import React, { useContext } from 'react';
import styles from './NavbarComponent.module.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../../store/Authentication-Context';

const NavbarComponent = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav>
      <ul className={styles.colorContainer}>
        {ctx.isLoggedIn && (
          <li className={styles.links}>
            <Link to="/valorant-API">Valorant API</Link>
          </li>
        )}

        <h1 className={styles.text}>Testpage</h1>

        {ctx.isLoggedIn && (
          <li className={styles.links}>
            <Link to="/home">Home</Link>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li className={styles.links}>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavbarComponent;
