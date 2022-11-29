import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { authentication } from '../../services/axios';

const Login = () => {
  const LOGIN_ENDPOINT = 'users/login';
  const usernameRef = useRef();
  const formRef = useRef();

  const [err, setErr] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { username, password };
    const result = await authentication(LOGIN_ENDPOINT, credentials);
    if (result.status === 'success') {
      window.location.reload();
    } else if (result.status === 'failure') {
      setErr(result.error);
    }
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <>
      <div className="login">
        <div className="login-container">
          <div>Log In</div>
          <form onSubmit={handleSubmit} ref={formRef}>
            <input
              ref={usernameRef}
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            {' '}
            <br />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {' '}
            <br />
            <input type="checkbox" />
            <span>Remember me</span>
            {' '}
            <br />
            <div>
              <button type="submit" disabled={!!(!username || !password)}>Log In</button>
            </div>
          </form>
          {
            err ? <p>{err}</p> : <div />
          }
          <div>
            <Link to="/register" >Register</Link>
            <div />
            <Link to="/forgot-password" >Forgot your password</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
