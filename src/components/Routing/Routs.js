import {Router, Route, Redirect, Switch} from 'react-router-dom';
import { history } from '../../App';
import { LoginForm } from '../pages/LoginPage/LoginPage';

export const Main = ({auth}) =>

  <main className='bg-dark text-white main' >
    <Router history = {history}>
      <div>
        <Switch>
          <Route path={'/login'} component={LoginForm} />
        </Switch>
      </div>
    </Router>
  </main>