import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CourseEntityService} from '../services/course-entity.service';
import {defaultDialogConfig} from '../shared/default-dialog-config';
import {EditCourseDialogComponent} from '../edit-course-dialog/edit-course-dialog.component';
import {MatDialog} from '@angular/material';
import {map} from 'rxjs/operators';



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    promoTotal$: Observable<number>;

    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;


    constructor(
      private coursesService: CourseEntityService,
      private dialog: MatDialog) {

    }

    ngOnInit() {

    this.beginnerCourses$ = this.coursesService.entities$
          .pipe(
            map(courses => courses.filter(course => course.category === 'BEGINNER'))
          );


        this.advancedCourses$ = this.coursesService.entities$
          .pipe(
            map(courses => courses.filter(course => course.category === 'ADVANCED'))
          );


        this.promoTotal$ = this.coursesService.entities$
          .pipe(
            map( courses => courses.filter(course => course.promo).length)
          );

    }

  onAddCourse() {

    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle:"Create Course",
      mode: 'create'
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig);

  }

}
