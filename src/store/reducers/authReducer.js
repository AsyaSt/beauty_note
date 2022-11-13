import { put, takeLatest } from "redux-saga/effects";


export const authReducer = function(state, {type, token, user}) {
    if (state === undefined) {
        if(localStorage.authToken) {
            type = "AUTH_LOGIN";
            token = localStorage.authToken;
            user = JSON.parse(localStorage.user);
            
        } else {
            type = "AUTH_LOGOUT";
        };
    };
    if (type === "AUTH_LOGIN") {
        localStorage.authToken = token;
        localStorage.user = JSON.stringify(user);
        
        return {
            token: token,
            user: user
        }
        
    };
    if (type === "AUTH_LOGOUT") {
        localStorage.removeItem("authToken");
        return {};
    };
  
    return state || {};
  };
  
  export const actionAuthLogin  = (token, user) => ({type: "AUTH_LOGIN", token, user});
  export const actionAuthLogout = () => ({type: "AUTH_LOGOUT"});
  

  export function* logoutWorker() {
    yield put(actionAuthLogout());
    // yield put(actionPromiseClear("aboutMe"));
}
export function* loginWorker(action) {
    yield put(actionAuthLogin(action.token, action.user));
}

  export function* authWatcher() {
    yield takeLatest("LOGIN", loginWorker);
    yield takeLatest("LOGOUT", logoutWorker);
}