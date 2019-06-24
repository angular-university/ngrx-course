import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {AppState} from '../../reducers';
import {createSelector, select, Store} from '@ngrx/store';
import {CourseEntityService} from '../services/course-entity.service';
import {defaultDialogConfig} from '../../shared/default-dialog-config';
import {EditCourseDialogComponent} from '../edit-course-dialog/edit-course-dialog.component';
import {MatDialog} from '@angular/material';



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
      private store: Store<AppState>,
      private coursesService: CourseEntityService,
      private dialog: MatDialog) {

    }

    ngOnInit() {

      const selectAllCourses = this.coursesService.selectors.selectEntities;

      const selectBeginnerCourses = createSelector(
        selectAllCourses,
        courses => courses.filter(course => course.category === 'BEGINNER')
      );

        this.beginnerCourses$ = this.store.pipe(select(selectBeginnerCourses));

        const selectAdvancedCourses = createSelector(
          selectAllCourses,
          courses => courses.filter(course => course.category === 'ADVANCED')
        );

        this.advancedCourses$ = this.store.pipe(select(selectAdvancedCourses));

        const selectPromoTotal = createSelector(
          selectAllCourses,
          courses => courses.filter(course => course.promo).length
        );


        this.promoTotal$ = this.store.pipe(select(selectPromoTotal));

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
