import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType, ROOT_EFFECTS_INIT} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthActions} from './action-types';


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


  constructor(private actions$: Actions, private router: Router) {


  }


}

