


import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesHttpService} from "./courses-http.service";
import {AppState} from "../../reducers";
import {select, Store} from "@ngrx/store";
import {filter, first, tap} from "rxjs/operators";
import {EntityCollectionService, EntityServices} from '@ngrx/data';



@Injectable()
export class CoursesResolver implements Resolve<boolean> {

    coursesEntityService: EntityCollectionService<Course>;

    constructor(
        private coursesService:CoursesHttpService,
        private store: Store<AppState>,
          private entityServices: EntityServices) {

      this.coursesEntityService = entityServices.getEntityCollectionService('Course');

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        const courseId = route.params['id'];

        return this.store
          .pipe(
            select(this.coursesEntityService.selectors.selectLoaded),
            tap(loaded => {
              if (!loaded) {
                this.coursesEntityService.getAll();
              }
            }),
            filter(loaded => !!loaded),
            first()
          )

    }

}

