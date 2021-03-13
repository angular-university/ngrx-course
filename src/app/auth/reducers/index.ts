import {
   ActionReducer,
   ActionReducerMap,
   createFeatureSelector,
   createReducer,
   createSelector,
   MetaReducer,
   on,
} from "@ngrx/store";
import { AuthActions } from "../action-types";
import { User } from "../model/user.model";

export interface AuthState {
   user: User;
}

export const initialAuthState: AuthState = {
   user: undefined,
};

// reducer function should always return copy of the new state, and not mutate existing state
export const authReducer = createReducer(

   initialAuthState,

   on(AuthActions.login, (state, action) => {
      return {
         user: action.user,
      };
   }),
   
   on(AuthActions.logout, (state, action) => {
      return {
         user: undefined,
      };
   })
);
