import { createReducer, on} from '@ngrx/store';
import {User} from './model/user.model';
import {AuthActions} from './action-types';


export interface AuthState {
  loggedIn: boolean,
  user: User
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};


export const authReducer = createReducer(

  initialAuthState,

  on(AuthActions.login, (state, action) => {
    return {
      loggedIn: true,
      user: action.user
    }
  }),

  on(AuthActions.logout, () => {
    return {
      loggedIn: false,
      user: undefined
    };
  })

);


