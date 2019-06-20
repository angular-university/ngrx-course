import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType, ROOT_EFFECTS_INIT} from '@ngrx/effects';
import {map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {defer, of} from 'rxjs';
import {AuthActions} from './action-types';
import {login, logout} from './auth.actions';


@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
      )
    ,
    {dispatch: false});


  logout$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {

          localStorage.removeItem('user');
          this.router.navigateByUrl('/login');

        })
      )
    , {dispatch: false});



  init$ = createEffect(() =>
    this.actions$
      .pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => {
        const userData = localStorage.getItem('user');

        if (userData) {
          return of(login({user: JSON.parse(userData)}));
        } else {
          return <any>of(logout());
        }
      })
    ));


  constructor(private actions$: Actions, private router: Router) {


  }


}

