import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CourseActions} from './action-types';
import {CoursesHttpService} from './services/courses-http.service';
import {concatMap, map, catchError} from 'rxjs/operators';
import {allCoursesLoaded} from './course.actions';
import { of } from 'rxjs';


@Injectable()
export class CoursesEffects {

    loadCourses$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(CourseActions.loadAllCourses),
                concatMap(action =>
                    this.coursesHttpService.findAllCourses()),
                map(courses => allCoursesLoaded({courses}))

            )
    );


    saveCourse$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(CourseActions.courseUpdated),
                concatMap(action =>
                    this.coursesHttpService.saveCourse(
                        action.update.id,
                        action.update.changes
                    ).pipe(
                        map(course => CourseActions.courseUpdatedSuccess({ course })),
                        catchError(() => of(CourseActions.courseUpdatedFailure({ course: action.update.changes })))
                    )
                )
            )
    );

    addCourse$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(CourseActions.addCourse),
                concatMap(action =>
                    this.coursesHttpService.addCourse(
                        action.course
                    ).pipe(
                        map(course => CourseActions.courseAddedSuccess({ course })),
                        catchError(() => of(CourseActions.courseAddedFailure({ course: action.course })))
                    )
                )
            )
    );

    constructor(private actions$: Actions,
                private coursesHttpService: CoursesHttpService) {

    }

}
