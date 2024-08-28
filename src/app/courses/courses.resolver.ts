import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AppState } from "../reducers";
import { Store } from "@ngrx/store";
import { loadAllCourses } from "./course.actions";
import { finalize, first, tap } from "rxjs/operators";

@Injectable()
export class CoursesResolver implements Resolve<any> {

    loading = false; // used to stop multiple calls to the server

    constructor(private store: Store<AppState>) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            tap(() => {
                if (!this.loading) {
                    this.loading = true;
                    this.store.dispatch(loadAllCourses());
                }}),
            first(),
            finalize(() => this.loading = false) // when the observable completes, set loading to false
        );


    }


}