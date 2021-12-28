import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { AuthActions } from "../../../ngrx-course/src/app/auth/action-types";

@Injectable()
/**
 * NGRX Effects 
 * - "Side Effects" library
 * - An event taken at the Store level, persisting the same data into a 3rd party system ( i.e. localStorage, BE Database )
 * - 
 */

export class AuthEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
        ), 
        { 
            dispatch: false 
        }
    );

    logout$ = createEffect(() => 
        this.actions$.pipe(
            ofType(AuthActions.logout),
            tap(action => {
                localStorage.removeItem('user');
                this.router.navigateByUrl('/login');
            })
        ), 
        {
            dispatch: false
        }
    );

    constructor( private actions$: Actions, private router: Router ) {}


}
