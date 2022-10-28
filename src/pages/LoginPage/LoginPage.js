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
      <h4 className="title">Welcome back</h4>
      <div className="col-4">
        <div>
          <input  type="text"  id="username" className='form__input'
            placeholder='Username'
            value={login} onChange={e => setLogin(e.target.value)} />
        </div>

        <div>
          <div className="form__password">
            <input type={showPass ? "text" : "password"} id="password" className='form__input form__input-password'
              placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
              <FontAwesomeIcon className='form__icon' icon={showPass ? faEye : faEyeSlash} 
              onClick={() => showPass? setShowPass(false) : setShowPass(true)}/>
          </div>
        </div>
            
        <div className="form__submit">
            
            <button type='submit' className='form__submit-button'
            // disabled={ password.length < 8 || login.length < 5}
            >
            Log in</button>
        </div>
      </div>
      <Link to="/register" className="form__submit-link">to registration</Link>
    </form>
    </>  }
  