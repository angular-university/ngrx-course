import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../action-types';
import { User } from '../model/user.model';

export interface AppState {
  user: User
}

export const initialAuthState: AppState = {
  user: undefined
};

export const authReducer = createReducer(

  initialAuthState,

  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    }
  })

);