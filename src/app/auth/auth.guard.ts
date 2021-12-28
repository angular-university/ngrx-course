import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { isLoggedIn } from "../../../ngrx-course/src/app/auth/auth.selectors";
import { AppState } from "../reducers";
import { isLoggedOut } from "./auth.selectors";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private store: Store<AppState>,
        private route: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.pipe(
            select(isLoggedIn),
            tap(
                loggedIn => {
                    if (!loggedIn) {
                        this.route.navigateByUrl('/login');
                    }
                }
            )
        );
    }
}