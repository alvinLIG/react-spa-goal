import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Mutation } from 'react-apollo';

import { LOGIN } from '../operations/mutations/login';
import { REGISTER } from '../operations/mutations/register';

import { AUTH_TOKEN } from '../utils/constants';

import Text from './Text';
import Button from './Button';

const Login = ({ ...props }) => {
  const [login, setLogin] = useState(true); // switch between login and register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();
  const showLogin = props.showLogin ? 'is-open' : '';

  const handleLoginClick = (data) => {
    const token = login ? data.authenticate : data.register;
    saveUserData(token);
    history.push('/');
  }

  const saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  }

  useEffect(() => {
    if(props.showLogin) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

  }, [props.showLogin]);

  return (
    <div className={`login ${showLogin}`}>
      <div className="login-inner">
        <div className="login-content">
          <h2 className="login-heading">{ login ? 'LOGIN' : 'REGISTER' }</h2>

          <form style={{marginTop: '50px'}}>
            <div>
              <Text
                label="Email"
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div style={{marginTop: '20px'}}>
              <Text
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            {!login && (
              <div style={{marginTop: '20px'}}>
                <Text
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}

            <Mutation
              mutation={ login ? LOGIN : REGISTER }
              variables={{ email, password }}
              onCompleted={data => handleLoginClick(data)}
            >
              {loginMutation => (
                <Button
                  text={ login ? 'LOGIN' : 'REGISTER' }
                  onClick={loginMutation}
                  style={{marginTop: '20px'}}
                />
              )}
            </Mutation>

            {login ?
              <p className="login-text">
                No account yet? <button onClick={() => setLogin(!login)}>REGISTER HERE</button>
              </p>
              : <p className="login-text">
                Already have an account? <button onClick={() => setLogin(!login)}>LOGIN HERE</button>
              </p>
            }
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
