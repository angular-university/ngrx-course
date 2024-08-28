import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./reducers/course.reducers";
import * as fromCourses from './reducers/course.reducers';



export const selectCoursesState =
    createFeatureSelector<CoursesState>('courses');

export const selectAllCourses = createSelector(
    selectCoursesState,
    fromCourses.selectAll

);

export const selectBeginnerCourses = createSelector(
    selectAllCourses,
    courses => courses.filter(courses => courses.category == 'BEGINNER')
);

export const selectAdvancedCourses = createSelector(
    selectAllCourses,
    courses => courses.filter(courses => courses.category == 'ADVANCED')
);

export const selectPromoTotal = createSelector(
    selectAllCourses,
    courses => courses.filter(courses => courses.promo).length
);

