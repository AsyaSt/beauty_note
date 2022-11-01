import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEyeSlash, faEye} from "@fortawesome/free-solid-svg-icons";
import './LoginPage.styles.scss'
import '../../vars.scss'


export const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);

    return <>
    <form className="form">
      <div className="form__title">
        <h4 className="title">Welcome back!</h4>
      </div>
      
      <div className="col-4">
        <div>
          <input  type="text"  id="username" className='form__input'
            placeholder='Email'
            value={login} onChange={e => setLogin(e.target.value)} />
        </div>

        <div  className="form__password">
          <div>
            <input type={showPass ? "text" : "password"} id="password" className='form__input form__input-password'
              placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
              <FontAwesomeIcon className='form__icon' icon={showPass ? faEye : faEyeSlash} 
              onClick={() => showPass? setShowPass(false) : setShowPass(true)}/>
          </div>
          <h5 className="form__password-forgot">Forgot password?</h5>
        </div>
            
        <div className="form__submit">
            
            <button type='submit' className='form__submit-button'
            // disabled={ password.length < 8 || login.length < 5}
            >
            Log in</button>
        </div>
      </div>
      <h6 className="form__submit-text">Dont have an account? 
      <Link to="/registration" className="form__submit-link"> Sign in</Link>
      </h6>
      {/* <Link to="/registration" className="form__submit-link">to registration</Link> */}
    </form>
    </>  }
  