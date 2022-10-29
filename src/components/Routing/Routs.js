import {Router, Route, Redirect, Switch, BrowserRouter} from 'react-router-dom';
import { history } from '../../App';
import { LoginForm } from '../../pages/LoginPage/LoginPage';
import { RegistrationForm } from '../../pages/RegistrationPage/RegistrationPage';

export const Main = ({auth}) =>

  <main className='bg-dark text-white main' >
    <BrowserRouter history = {history}>
      
        <Switch>
          <Route path={'/login'} component={LoginForm} />
          <Route path={'/registration'} component={RegistrationForm} />

          <Route exact path="/"> <Redirect to="/login" /> </Route>
        </Switch>
    
    </BrowserRouter>
  </main>