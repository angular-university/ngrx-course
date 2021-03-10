import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

// feature selector allows us to use strong types in the selectors
export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const isLoggedIn = createSelector(
   selectAuthState, // mapping function
   (auth) => !!auth.user // projector function - result of the mapping function, similar to map rxjs operator, but this is in memory
);

// selector by itself is a mapping function
export const isLoggedOut = createSelector(
   isLoggedIn,
   loggedIn => !loggedIn
);