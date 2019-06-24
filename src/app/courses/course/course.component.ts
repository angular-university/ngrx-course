import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {AppState} from '../../reducers';
import {createSelector, select, Store} from '@ngrx/store';
import {PageQuery} from '../course.actions';
import {Lesson} from '../model/lesson';
import {CourseEntityService} from '../services/course-entity.service';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course$: Observable<Course>;

  lessons: Lesson[] = [];

  displayedColumns = ['seqNo', 'description', 'duration'];

  loading$: Observable<boolean>;


  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private coursesService: CourseEntityService) {

  }

  ngOnInit() {

    const courseUrl = this.route.snapshot.paramMap.get('id');

    this.loading$ = this.coursesService.loading$;

    const selectAllCourses = this.coursesService.selectors.selectEntities;

    const selectCourseByUrl = createSelector(
      selectAllCourses,
      courses => courses.find(course => course.url == courseUrl)
    );

    this.course$ = this.store.pipe(select(selectCourseByUrl));

    /*
    const initialPage: PageQuery = {
      pageIndex: 0,
      pageSize: 3
    };

    this.dataSource.loadLessons(courseUrl, initialPage);

    */

  }


/*
  loadLessonsPage() {

    const newPage: PageQuery = {
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize
    };

    this.dataSource.loadLessons(this.course.id, newPage);

  }

*/


  loadMore() {

  }
}
