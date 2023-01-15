import { CoursesHttpService } from './services/courses-http.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { CoursesActions } from './action-types';
import { concatMap, map } from 'rxjs/operators';

@Injectable()
export class CoursesEffects {

    loadCourses$ = createEffect(
        () => this.actions$.pipe(
            ofType(CoursesActions.loadAllCourses),
            concatMap(action => this.coursesService.findAllCourses()),
            map(courses => CoursesActions.allCoursesLoaded({ courses }))
        )
    )

    saveCourse$ = createEffect(
        () => this.actions$.pipe(
            ofType(CoursesActions.courseUpdated),
            concatMap(action => this.coursesService.saveCourse(action.update.id, action.update.changes))
        ),
        { dispatch: false }
    )

    constructor(private actions$: Actions, private coursesService: CoursesHttpService) { }
}