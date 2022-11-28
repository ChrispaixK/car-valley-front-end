import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { authentication } from '../../services/axios';

const Register = () => {
  const USERS_ENDPOINT = 'users';
  const usernameRef = useRef();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errMsges, setErrMsges] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsges('');
  }, [username, password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username,
      firstName,
      lastName,
      dob,
      password,
    };
    const result = await authentication(USERS_ENDPOINT, newUser);
    if (result.status === 'success') {
      navigate('/login');
    } else if (result.status === 'failure') {
      setErrMsges(result.error);
    }
  };

  return (
    <>
      <section className="flex justify-center pt-12 text-white h-fit bg-dark">
        <div className="flex flex-col items-center my-8">

          <div className="header">Register</div>

          <form>
            <label htmlFor="username">
              Username:
              <br />
              <input
                type="text"
                id="username"
                ref={usernameRef}
                autoComplete="off"
                className="mt-2 mb-4 input"
                placeholder="E.g. Rex"
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setFocusUsername(true)}
                onBlur={() => setFocusUsername(false)}
                required
                aria-invalid={validUsername ? 'false' : 'true'}
                aria-describedby="uidnote"
              />
            </label>

            <label htmlFor="firstname">
              <div>First Name:</div>
              <input
                type="text"
                className="mt-2 mb-4 input"
                placeholder="E.g. Htet"
                onChange={(e) => setFirstName(e.target.value)}
                id="firstname"
              />
            </label>

            <label htmlFor="lastname">
              <div>Last Name:</div>
              <input
                type="text"
                className="mt-2 mb-4 input"
                placeholder="E.g. Naing"
                onChange={(e) => setLastName(e.target.value)}
                id="lastname"
              />
            </label>

            <label htmlFor="dob">
              <div>dob:</div>
              <input
                type="text"
                className="mt-2 mb-4 input"
                placeholder="E.g. 18-03-2000"
                onChange={(e) => setDob(e.target.value)}
                id="dob"
              />
            </label>

            <label htmlFor="password">
              Password:
              <span className={validPassword ? 'inline ml-4 text-green-500' : 'hidden'}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={!validPassword && password ? 'inline ml-4 text-red-500' : 'hidden'}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
              <br />
              <input
                type="password"
                id="password"
                className="mt-2 mb-4 input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusPassword(true)}
                onBlur={() => setFocusPassword(false)}
                required
                aria-invalid={validPassword ? 'false' : 'true'}
                aria-describedby="pwdnote"
              />
            </label>

            <label htmlFor="confirm_password">
              Confirm Password:
              <span className={validConfirm && confirmPassword ? 'inline ml-4 text-green-500' : 'hidden'}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={!validConfirm && confirmPassword ? 'inline ml-4 text-red-500' : 'hidden'}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
              <br />
              <input
                type="password"
                id="confirm_password"
                className="mt-2 mb-4 input"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => setFocusConfirm(true)}
                onBlur={() => setFocusConfirm(false)}
                required
                aria-invalid={validPassword ? 'false' : 'true'}
                aria-describedby="confirmnote"
              />
            </label>
            <br />

            <input type="checkbox" className="checkbox" />
            <span>Remember me</span>
            {' '}
            <br />

            <div className="flex justify-center w-full my-2">
              <button
                type="button"
                disabled={!!(!username || !firstName || !dob || !lastName || !password || !confirmPassword)}
                className="btn hover:shadow-gray-600 disabled:opacity-60 disabled:bg-btn disabled:shadow-none"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </form>

          {
            errMsges ? errMsges.map((msg) => <p key={msg} className="text-red-400" aria-live="assertive">{msg}</p>) : <div />
          }

          <div className="flex items-center justify-center">
            <Link to="/login" className="link">Log in</Link>
            <div className="vertical-line" />
            <Link to="/forgot-password" className="link">Forgot your password</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;