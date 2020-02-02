import {createAction, props} from '@ngrx/store';
import {Course} from './model/course';
import {Update} from '@ngrx/entity';
import {UpdateStr} from '@ngrx/entity/src/models';


export const loadAllCourses = createAction(
    "[Courses Resolver] Load All Courses"
);

export const addCourse = createAction(
    "[Edit Course Dialog] Add Course",
    props<{ course: Course }>()
);

export const courseAddedSuccess = createAction(
    "[Courses/API] Add Course Success",
    props<{ course: Course }>()
);

export const courseAddedFailure = createAction(
    "[Courses/API] Add Course Failure",
    props<{ course: Course }>()
);


export const courseUpdatedSuccess = createAction(
    "[Courses/API] Update Course Success",
    props<{ course: Course }>()
);

export const courseUpdatedFailure = createAction(
    "[Courses/API] Update Course Failure",
    props<{ course: Partial<Course> }>()
);


export const allCoursesLoaded = createAction(
    "[Load Courses Effect] All Courses Loaded",
    props<{courses: Course[]}>()
);


export const courseUpdated = createAction(
  "[Edit Course Dialog] Course Updated",
  props<{update: Update<Course>}>()
);

