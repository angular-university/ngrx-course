import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Lesson} from './model/lesson';
import {Course} from './model/course';
import {createReducer, on} from '@ngrx/store';
import {CourseActions} from './action-types';



export interface LessonsState extends EntityState<Lesson> {
  loading:boolean;
}

function sortByCourseAndSeqNo(l1: Lesson, l2:Lesson) {
  const compare = l1.courseId - l2.courseId;
  if (compare != 0) {
    return compare;
  }
  else {
    return l1.seqNo - l2.seqNo;
  }
}

export const adapter : EntityAdapter<Lesson> =
  createEntityAdapter<Lesson>({
      sortComparer: sortByCourseAndSeqNo
  });


const initialLessonsState = adapter.getInitialState({
  loading: false
});


export const lessonsReducer = createReducer(

  initialLessonsState,

  on(CourseActions.lessonsPageCancelled, (state, action) => {
    return {
      ...state,
      loading:false
    };
  }),

  on(CourseActions.loadLessonsPage, (state, action) => {
    return {
      ...state,
      loading:true
    };
  }),

  on(CourseActions.lessonsPageLoaded, (state, action) => adapter.addMany(action.lessons, {...state, loading:false})),

);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();


