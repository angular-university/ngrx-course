import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";

export const loadAllCourses = createAction(
    "[Courses Resolver] Load All Courses"  // more of a command than an event
);

export const allCoursesLoaded = createAction(
    "[Load Courses Effect] All Courses Loaded", // more of an event than a command
    props<{ courses: Course[] }>()
);