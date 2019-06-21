import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {CoursesService} from './services/courses.service';
import {AppState} from '../reducers';
import {select, Store} from '@ngrx/store';
import {CourseActions} from './action-types';
import {lessonsPageCancelled, lessonsPageLoaded} from './course.actions';


@Injectable()
export class CourseEffects {

  loadLessonsPage$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(CourseActions.loadLessonsPage),
        mergeMap(action =>
          this.coursesService.findLessons(action.courseId,
            action.page.pageIndex, action.page.pageSize)
            .pipe(
              catchError(err => {
                console.log('error loading a lessons page ', err);
                this.store.dispatch(lessonsPageCancelled());
                return of([]);
              })
            )
        ),
        map(lessons => lessonsPageLoaded({lessons}))
      )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store: Store<AppState>) {

  }

}









