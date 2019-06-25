import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {isLoggedIn} from './auth.selectors';
import {tap} from 'rxjs/operators';
import {login, logout} from './auth.actions';
import {AppState} from '../reducers/reducers';



@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private store: Store<AppState>, private router: Router) {

  }


  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean>  {

    const userData = localStorage.getItem('user');

    if (userData) {
       this.store.dispatch(login({user: JSON.parse(userData)}));
    } else {
      this.store.dispatch(logout());
    }

    return this.store
      .pipe(
        select(isLoggedIn),
        tap(loggedIn => {

          if (!loggedIn) {
            this.router.navigateByUrl('/login');
          }

        })
    );

  }

}
