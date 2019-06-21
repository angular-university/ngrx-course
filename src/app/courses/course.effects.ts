import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, concatMap, filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {CoursesService} from './services/courses.service';
import {AppState} from '../reducers';
import {select, Store} from '@ngrx/store';
import {CourseActions} from './action-types';
import {allCoursesLoaded, courseLoaded, lessonsPageCancelled, lessonsPageLoaded} from './course.actions';
import {areAllCoursesLoaded} from './course.selectors';


@Injectable()
export class CourseEffects {

  loadCourse$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(CourseActions.loadCourse),
        mergeMap(action => this.coursesService.findCourseById(action.courseId)),
        map(course => courseLoaded({course}))
      )
  );

  loadAllCourses$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(CourseActions.loadAllCourses),
        withLatestFrom(this.store.pipe(select(areAllCoursesLoaded))),
        filter(([action, allCoursesLoaded]) => !allCoursesLoaded),
        mergeMap(() => this.coursesService.findAllCourses()),
        map(courses => allCoursesLoaded({courses}))
      )
  );

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


  saveCourse$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(CourseActions.saveCourse),
          concatMap(action => this.coursesService.saveCourse(action.update.id, action.update.changes))
        )
    ,{dispatch: false});


  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store: Store<AppState>) {

  }

}









