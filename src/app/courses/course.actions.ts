import {Action} from '@ngrx/store';
import {Course} from './model/course';
import {Update} from '@ngrx/entity';
import {Lesson} from './model/lesson';


export enum CourseActionTypes {
  CourseRequested = '[View Course Page] Course Requested',
  CourseLoaded = '[Courses API] Course Loaded',
  AllCoursesRequested = '[Courses Home Page] All Courses Requested',
  AllCoursesLoaded = '[Courses API] All Courses Loaded',
  CourseSaved = '[Edit Course Dialog] Course Saved',
  LessonsPageRequested = '[Course Landing Page] Lessons Page Requested',
  LessonsPageLoaded = '[Courses API] Lessons Page Loaded',
  LessonsPageCancelled = '[Courses API] Lessons Page Cancelled'
}

export interface PageQuery {
  pageIndex: number;
  pageSize:number;
}

export class LessonsPageRequested implements Action {

  readonly type = CourseActionTypes.LessonsPageRequested;

  constructor(public payload: {courseId:number, page:PageQuery}) {}

}

export class LessonsPageLoaded implements Action {

  readonly type = CourseActionTypes.LessonsPageLoaded;

  constructor(public payload:{lessons: Lesson[]}) {}

}

export class LessonsPageCancelled implements Action {

  readonly type = CourseActionTypes.LessonsPageCancelled;

}


export class CourseRequested implements Action {

  readonly type = CourseActionTypes.CourseRequested;

  constructor(public payload: { courseId: number }) {

  }
}


export class CourseLoaded implements Action {

  readonly type = CourseActionTypes.CourseLoaded;

  constructor(public payload: { course: Course }) {
  }
}


export class AllCoursesRequested implements Action {

  readonly type = CourseActionTypes.AllCoursesRequested;

}

export class AllCoursesLoaded implements Action {

  readonly type = CourseActionTypes.AllCoursesLoaded;

  constructor(public payload: { courses: Course[] }) {

  }

}

export class CourseSaved implements Action {

  readonly type = CourseActionTypes.CourseSaved;

  constructor(public payload: { course: Update<Course> }) {}
}




export type CourseActions =
  CourseRequested
  | CourseLoaded
  | AllCoursesRequested
  | AllCoursesLoaded
  | CourseSaved
  | LessonsPageRequested
  | LessonsPageLoaded
  | LessonsPageCancelled;




