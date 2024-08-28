import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CourseActions } from "./action-types";
import { concatMap, map } from "rxjs/operators";
import { CoursesHttpService } from "./services/courses-http.service";
import { allCoursesLoaded } from "./course.actions";


@Injectable()
export class CoursesEffects {

    loadCourses$ = createEffect(
        () => this.actions$.pipe(
            ofType(CourseActions.loadAllCourses),
            concatMap(() => this.coursesHttpService.findAllCourses()),
            map(courses => allCoursesLoaded({ courses })) // dispatches the allCoursesLoaded action with the courses payload
        )
    )

    saveCourse$ = createEffect(
        () => this.actions$.pipe(
            ofType(CourseActions.courseUpdated),
            concatMap((action) => this.coursesHttpService.saveCourse(action.update.id, action.update.changes))
        ),
        { dispatch: false } // we don't want to dispatch any action after saving the course

    );

    constructor(private actions$: Actions, private coursesHttpService: CoursesHttpService) {

    }

}