import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {isLoggedIn, isLoggedOut} from './auth/auth.selectors';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {logout} from './auth/auth.actions';
import {AppState} from './reducers/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    isLoggedIn$: Observable<boolean>;

    isLoggedOut$: Observable<boolean>;

    loading = true;

    constructor(private store: Store<AppState>, private router: Router) {

    }

    ngOnInit() {

      this.router.events.subscribe(event  => {
        switch (true) {
          case event instanceof NavigationStart: {
            this.loading = true;
            break;
          }

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this.loading = false;
            break;
          }
          default: {
            break;
          }
        }
      });

      this.isLoggedIn$ = this.store
        .pipe(
          select(isLoggedIn)
        );

      this.isLoggedOut$ = this.store
        .pipe(
          select(isLoggedOut)
        );

    }

    logout() {

      this.store.dispatch(logout());

    }


}
