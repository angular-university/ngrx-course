import {compareCourses, Course} from '../model/course';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';
import {CourseActions} from '../action-types';


export interface CoursesState extends EntityState<Course> {
    allCoursesLoaded: boolean;
    saving: boolean;
}


export const adapter = createEntityAdapter<Course>({
    sortComparer: compareCourses
});


export const initialCoursesState: CoursesState = adapter.getInitialState({
    allCoursesLoaded: false,
    saving: false
});


export const coursesReducer = createReducer(

    initialCoursesState,

    on(CourseActions.allCoursesLoaded,
        (state, action) => adapter.addAll(
            action.courses,
            {...state,
                allCoursesLoaded:true
            })),


    on(CourseActions.courseUpdated, (state, action) =>
        adapter.updateOne(
            action.update,
            { ...state, saving: true })),

    on(CourseActions.addCourse, (state, _action) => ({ ...state, saving: true })),
    on(CourseActions.courseAddedSuccess, (state, action) =>
        adapter.addOne(
            action.course,
            { ...state, saving: false })),

    on(
        CourseActions.courseUpdatedFailure,
        CourseActions.courseUpdatedSuccess,
        CourseActions.courseAddedFailure,
        (state, _action) => ({ ...state, saving: false }
    ))

);


export const {
    selectAll
} = adapter.getSelectors();

