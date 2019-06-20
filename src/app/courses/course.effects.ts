import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  AllCoursesLoaded,
  AllCoursesRequested,
  CourseActionTypes,
  CourseLoaded,
  CourseRequested, LessonsPageCancelled, LessonsPageLoaded,
  LessonsPageRequested
} from './course.actions';
import {throwError,of} from 'rxjs';
import {catchError, concatMap, exhaustMap, filter, map, mergeMap, withLatestFrom} from "rxjs/operators";
import {CoursesService} from './services/courses.service';
import {AppState} from '../reducers';
import {select, Store} from '@ngrx/store';
import {allCoursesLoaded} from './course.selectors';

@Injectable()
export class CourseEffects {

  @Effect()
  loadCourse$ = this.actions$
    .pipe(
      ofType<CourseRequested>(CourseActionTypes.CourseRequested),
      mergeMap(action => this.coursesService.findCourseById(action.payload.courseId)),
      map(course => new CourseLoaded({course}))

  );

  @Effect()
  loadAllCourses$ = this.actions$
    .pipe(
      ofType<AllCoursesRequested>(CourseActionTypes.AllCoursesRequested),
      withLatestFrom(this.store.pipe(select(allCoursesLoaded))),
      filter(([action, allCoursesLoaded]) => !allCoursesLoaded),
      mergeMap(() => this.coursesService.findAllCourses()),
      map(courses => new AllCoursesLoaded({courses}))
    );


  @Effect()
  loadLessonsPage$ = this.actions$
    .pipe(
      ofType<LessonsPageRequested>(CourseActionTypes.LessonsPageRequested),
      mergeMap(({payload}) =>
              this.coursesService.findLessons(payload.courseId,
                          payload.page.pageIndex, payload.page.pageSize)
                .pipe(
                  catchError(err => {
                    console.log('error loading a lessons page ', err);
                    this.store.dispatch(new LessonsPageCancelled());
                    return of([]);
                  })
                )

      ),
      map(lessons => new LessonsPageLoaded({lessons}))
    );



  constructor(private actions$ :Actions, private coursesService: CoursesService,
              private store: Store<AppState>) {

  }

}









