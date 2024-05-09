import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../reducers";
import { isLoggedIn } from "./auth.selectors";
import { tap } from "rxjs/operators";

@Injectable()

export class AuthGruard implements CanActivate {
    constructor(
        private router: Router,
        private store: Store<AppState>
    ) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.pipe(select(isLoggedIn), tap((isLoggedIn) => {
            if (!isLoggedIn) {
                this.router.navigate(['/login'])
            }
        }))
    }
}