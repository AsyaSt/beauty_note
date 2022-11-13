import { history } from "../App";
import { actionAuthLogin } from "../store/reducers/authReducer";
import { store } from "../store/store";

export async function sendForm (url, data) {
    let error = await fetch(`http://beauty-manager-app/api/${url}`, {
        method: 'POST',
        body: data
      }).then(res => res.json())
      .then(data => {
          if(data.token) {
            store.dispatch(actionAuthLogin(data.token, data.user));
            console.log('Aga 111 ' + data); 
            history.push('/user');
            return data
          } else {
            console.log(data); 
          }
      })
    return error;
}