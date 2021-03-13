import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";
import {
   NavigationCancel,
   NavigationEnd,
   NavigationError,
   NavigationStart,
   Router,
} from "@angular/router";
import { AppState } from "./reducers";
import { isLoggedIn, isLoggedOut } from "./auth/auth.selectors";
import { login, logout } from "./auth/auth.actions";

@Component({
   selector: "app-root",
   templateUrl: "./app.component.html",
   styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
   loading = true;

   isLoggedIn$: Observable<boolean>;
   isLoggedOut$: Observable<boolean>;

   constructor(private router: Router, private store: Store<AppState>) {}

   ngOnInit() {

      // read user from local storage and dispatch login action if user is present
      const userProfile = localStorage.getItem('user');
      if (userProfile) {
         this.store.dispatch(login({user: JSON.parse(userProfile)}));
      }

      console.log("app component init");

      this.router.events.subscribe((event) => {
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

      // select ngrx operator is actualy doing map distinctUntilChanged
      // but using ngrx selector we are preventing duplicate calculation inside mapping operator
      // this.isLoggedOut$ = this.store.pipe(distinctUntilChanged(), map((state) => !state["auth"].user));
      this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));

      this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
   }

   logout() {
      this.store.dispatch(logout());
   }
}
