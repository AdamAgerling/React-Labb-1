// TODO
// FUXA LINK SKITEN, PRATA MED JON PÅ TISDAG OM DET INTE LÖSES INNAN.

import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card';

import styles from './Login.module.css';

import AuthContext from '../../store/Authentication-Context';

const emailChecker = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordChecker = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 5 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 5 };
  }
  return { value: '', isValid: false };
};

const Login = () => {
  const [loginIsValid, setLoginIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailChecker, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordChecker, {
    value: '',
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('check timeout');
      setLoginIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log('identifier check');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

    setLoginIsValid(emailState.isValid && event.target.value.trim().length > 5);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (loginIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn}>
            <Link to="/welcome">Log in för helvete</Link>
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
