import {Course} from './model/course';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {CourseActions, CourseActionTypes} from './course.actions';



export interface CoursesState extends EntityState<Course> {

  allCoursesLoaded:boolean;

}

export function compareCourses(c1:Course, c2: Course) {
  return c1.seqNo - c2.seqNo;
}


export const adapter : EntityAdapter<Course> =
  createEntityAdapter<Course>({
    sortComparer: compareCourses
  });



export const initialCoursesState: CoursesState = adapter.getInitialState({
  allCoursesLoaded: false
});


export function coursesReducer(state = initialCoursesState , action: CourseActions): CoursesState {

  switch(action.type) {

    case CourseActionTypes.CourseLoaded:

      return adapter.addOne(action.payload.course, state);

    case CourseActionTypes.AllCoursesLoaded:

      return adapter.addAll(action.payload.courses, {...state, allCoursesLoaded:true});

    case CourseActionTypes.CourseSaved:

      return adapter.updateOne(action.payload.course,state);

    default: {

      return state;
    }

  }
}


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();








