import {ActionReducer, ActionReducerMap, createFeatureSelector, createReducer, createSelector, MetaReducer, on } from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { routerReducer } from "@ngrx/router-store";
import { User } from "../model/user.model";
import { AuthActions } from "../action-types";

/**
 * NGRX Reducer 
 * - a plain JS function that takes two arguments: the current state of the Store and the action that was just 
 * -- dispatched to the Store then returns a new version of the Store state
 * - It doesn't directly modify the state of the Store, rather it calculates a new version of the state based 
 * -- on the previous state and the action that was just dispatched 
 */

export interface AuthState {
    user: User
}

export const initialAuthState: AuthState = {
    user: undefined
}

export const authReducer = createReducer(
    initialAuthState,
    on(AuthActions.login, (state, action) => {
        return {
            user: action.user
        }
    }),
    on(AuthActions.logout, (state, action) => {
        return {
            user: undefined
        }
    })
);

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        return reducer(state, action)
    }
}

export const metaReducers: MetaReducer<AuthState>[] = !environment.production ? [logger] : [];
