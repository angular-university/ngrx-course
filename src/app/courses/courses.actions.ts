import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";

export const loadAllCourses = createAction(
  //Para cargar los cursos antes de que se carge la pagina de courses
  "[Courses Resolver] Load All Courses"
);

export const allCoursesLoaded = createAction(
  "[Load Courses Effect] All Courses Loaded",
  props<{ courses: Course[] }>
);
