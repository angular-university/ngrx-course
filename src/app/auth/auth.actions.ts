import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

/**
 * NGRX Action 
 * - plain JS object that is sent to the Store in order to trigger some modification of the Store state.
 * - each action has a type which is a string, (i.e. type: 'Login Action')
 * - each action has a payload? which is any data the store might need in order to create a new version of it's internal state
 * - Like an Event that reports something has happened at the component level
 * - Dispatching an action is the only way of modifying the store state
 */

export const login = createAction(
    '[Login Page] User Login',
    props<{user: User}>()
);

export const logout = createAction(
    '[Top Menu] User Logout'
);