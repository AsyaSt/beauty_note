import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEyeSlash, faEye} from "@fortawesome/free-solid-svg-icons";
import '../LoginPage/LoginPage.styles.scss'
import './RegistrationPage.styles.scss'


export const RegistrationForm = () => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [showConfPass, setShowConfPass] = useState(false);

    return <>
    <form className="form">
      <div className="form__title">
        <h4 className="title">Create account</h4>
      </div>

      <div className="col-4">
        <div>
          <input  type="text"  id="username" className='form__input'
            placeholder='Username'
            value={login} onChange={e => setLogin(e.target.value)} />
        </div>
        <div>
          <input  type="text"  id="email" className='form__input'
            placeholder='Email'
            value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        
        <div className="form__password">
        <input type={showPass ? "text" : "password"} id="password" className='form__input form__input-password'
            placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
            <FontAwesomeIcon className='form__icon' icon={showPass ? faEye : faEyeSlash} 
            onClick={() => showPass? setShowPass(false) : setShowPass(true)}/>
        </div>

        <div className="form__password">
        <input type={showConfPass ? "text" : "password"} id="password" className='form__input form__input-password'
            placeholder='Confirm Password' value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
            <FontAwesomeIcon className='form__icon' icon={showConfPass ? faEye : faEyeSlash} 
            onClick={() => showConfPass? setShowConfPass(false) : setShowConfPass(true)}/>
        </div>
        
            
        <div className="form__submit">
            
            <button type='submit' className='form__submit-button'
            // disabled={ password.length < 8 || login.length < 5}
            >
            Sign Up</button>
        </div>
      </div>
      <h6 className="form__submit-text">Already have an account?  
        <Link to="/login" className="form__submit-link registration__submit-link"> Log in</Link>
      </h6>
      {/* <Link to="/login" className="form__submit-link">to login</Link> */}
    </form>
    </>  }
  