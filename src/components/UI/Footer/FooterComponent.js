import styles from './FooterComponent.module.css';
import React, { useContext } from 'react';
import AuthContext from '../../../store/Authentication-Context';
const FooterComponent = () => {
  const ctx = useContext(AuthContext);
  return (
    <footer className={styles.test2}>
      <div>
        You are <b>{ctx.isLoggedIn ? 'currently' : 'not'}</b> logged in.
      </div>

      <p className={styles.center}>
        A massive footer that absolutely serves no purpose
      </p>
    </footer>
  );
};

export default FooterComponent;
