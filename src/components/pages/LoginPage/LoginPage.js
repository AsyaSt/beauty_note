import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEyeSlash, faEye} from "@fortawesome/free-solid-svg-icons";
import './LoginPage.styles.css'


export const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);

    return <>
    <form className="form">
      
        <div className="col-4">
              <h4 className="form__title">Login</h4>
              <hr/>
              <div>
                <div><label className="form__label">*Username</label></div>
                <input  type="text"  id="username" className='form__input'
                  value={login} onChange={e => setLogin(e.target.value)} />
              </div>

              <div>
                <label className="form__label">*Password</label>
                <div>
                  <input type={showPass ? "text" : "password"} id="password" className='form__input'
                    value={password} onChange={e => setPassword(e.target.value)} />
                  <div className='mb-3'>
                    <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} onClick={() => showPass? setShowPass(false) : setShowPass(true)}/>
                  </div>
                </div>
              </div>
              
              <div className="form__submit">
                  <Link to="/register" className="">Register</Link>
                  <button type='submit' 
                  // disabled={ password.length < 8 || login.length < 5}
                  >
                  Log in</button>
              </div>
          </div>
      </form>
    </>
  }
  