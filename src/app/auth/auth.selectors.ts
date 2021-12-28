import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

/**
 * NGRX Feature Selectors 
 * - A type-safe version of the mapping function (selector) used to gain access to the name of the 
 * -- property we need from the Global State, 
 * - Returns the TYPE of the state ( i.e. createFeatureSelector<AuthState> )
 */

export const selectAuthState = createFeatureSelector<AuthState>('auth');

/**
 * NGRX Selectors 
 * - A Memoized function
 * - Mapping function with memory
 * - contains a projector function (what to output)
 * - Used to query the Store state to get values the view need in order to display data to the user
 */

export const isLoggedIn = createSelector(
    selectAuthState,
    auth => !!auth.user
);

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);