import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';


import * as fromLesson from './lessons.reducers';

import {PageQuery} from './course.actions';
import {LessonsState} from './lessons.reducers';


export const selectLessonsState = createFeatureSelector<LessonsState>("lessons");


export const selectAllLessons = createSelector(
    selectLessonsState,
    fromLesson.selectAll

);



export const selectLessonsPage = (courseId:number, page:PageQuery) => createSelector(
  selectAllLessons,
  allLessons => {

    const start = page.pageIndex * page.pageSize,
          end = start + page.pageSize;

    return allLessons
            .filter(lesson => lesson.courseId == courseId)
            .slice(start, end);

  }

);










