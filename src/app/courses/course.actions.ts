import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";
import { Update } from "@ngrx/entity";

export const loadAllCourses = createAction(
    "[Courses Resolver] Load All Courses"  // more of a command than an event
);

export const allCoursesLoaded = createAction(
    "[Load Courses Effect] All Courses Loaded", // more of an event than a command
    props<{ courses: Course[] }>()
);

export const courseUpdated = createAction(
    "[Edit Course Dialog] Course Updated",
    props<{update: Update<Course>}>()
);

