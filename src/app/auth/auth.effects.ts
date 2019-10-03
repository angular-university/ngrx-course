import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { AuthActions } from "./action-type";
import { tap } from "rxjs/internal/operators/tap";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {

    loggin$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(AuthActions.login),
                tap(action => localStorage.setItem(
                    'user',
                    JSON.stringify(action.user)
                ))
            )
        , { dispatch: false }
    );

    logout$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType(AuthActions.logout),
                tap(action => {
                    localStorage.removeItem('user');
                    this.touter.navigateByUrl('/login');
                })
            )
        , { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private touter: Router
    ) {

    }
}
