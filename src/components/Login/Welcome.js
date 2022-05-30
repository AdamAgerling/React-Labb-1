import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import styles from '../Home/Home.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/Authentication-Context';

const Welcome = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className={styles.windowHeight}>
      <Card className={styles.centerhehe}>
        <h2>Welcome back!</h2>
        <Button onClick={authCtx.onLogout}>Logout</Button>
      </Card>
    </div>
  );
};

export default Welcome;
