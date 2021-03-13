import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { compareCourses, Course } from "../model/course";

// export interface CoursesState {
//    entities: { [key: number]: Course }; // map of entities where key is ID field of the object, and value is object it self
//    ids: number[] // order of entities
// }


// using ngrx entity format
export interface CoursesState extends EntityState<Course> {
   allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter<Course>({
   sortComparer: compareCourses,
   selectId: course => course.id // this is not nececery for the unique identifier field if it's called id
});

export const initialCoursesState = adapter.getInitialState({
   allCoursesLoaded: false
});

export const coursesReducer = createReducer(

   initialCoursesState,

   on(CourseActions.allCoursesLoaded, 
      (state, action) => adapter.addAll(
         action.courses, 
         {...state, allCoursesLoaded: true})
   ),

   on(CourseActions.courseUpdated,
      (state, action) => adapter.updateOne(action.update, state)
   )
);

export const { selectAll } = adapter.getSelectors();
