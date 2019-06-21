import {Course} from './model/course';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';
import {CourseActions} from './action-types';




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


export const coursesReducer = createReducer(

  initialCoursesState,

  on(CourseActions.courseLoaded, (state, action) => adapter.addOne(action.course, state)),

  on(CourseActions.allCoursesLoaded, (state, action) => adapter.addAll(action.courses, {...state, allCoursesLoaded:true})),

  on(CourseActions.saveCourse, (state, action) => adapter.updateOne(action.update, state))

);


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();








