import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {Lesson} from '../model/lesson';
import {CourseEntityService} from '../services/course-entity.service';
import {concatMap, map} from 'rxjs/operators';
import {LessonEntityService} from '../services/lesson-entity.service';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course$: Observable<Course>;

  lessons$: Observable<Lesson[]>;

  displayedColumns = ['seqNo', 'description', 'duration'];

  loading$: Observable<boolean>;


  constructor(
    private route: ActivatedRoute,
    private coursesService: CourseEntityService,
    private lessonsService: LessonEntityService) {

  }

  ngOnInit() {

    const courseUrl = this.route.snapshot.paramMap.get('id');

    this.loading$ = this.coursesService.loading$;

    const selectAllCourses = this.coursesService.selectors.selectEntities;

    this.course$ = this.coursesService.entities$
      .pipe(
        map(courses => courses.find(course => course.url == courseUrl))
      );

    this.lessons$ = this.course$
      .pipe(
        concatMap(course => this.lessonsService.getWithQuery({
          "courseId": course.id.toString(),
          "pageIndex": "0",
          "pageSize": "3"
        }))

      );

  }


  loadMore() {

  }

}
