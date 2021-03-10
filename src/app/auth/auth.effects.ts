import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { AuthActions } from "./action-types";

@Injectable()
export class AuthEffects {
   // createEffect is automatically being subscribed to and also handles some error handling
   login$ = createEffect(
      () =>
         this.actions$.pipe(
            ofType(AuthActions.login),
            tap((action) => localStorage.setItem("user", JSON.stringify(action.user)))
         ),
      { dispatch: false } // this effect does not dispatch new action, and you need it to fix infinite loop
   );

   logout$ = createEffect(
      () =>
         this.actions$.pipe(
            ofType(AuthActions.logout),
            tap((action) => {
               localStorage.removeItem("user");
               this.router.navigateByUrl("/login");
            })
         ),
      { dispatch: false }
   );

   constructor(private actions$: Actions, private router: Router) {}
}
