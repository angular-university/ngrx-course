import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {AppState} from '../../reducers';
import {createSelector, select, Store} from '@ngrx/store';
import {EntityCollectionService, EntityServices} from '@ngrx/data';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    promoTotal$: Observable<number>;

    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    coursesEntityService: EntityCollectionService<Course>;

    constructor(
      private store: Store<AppState>,
      private entityServices: EntityServices) {

      this.coursesEntityService = entityServices.getEntityCollectionService('Course');

    }

    ngOnInit() {

      const selectAllCourses = this.coursesEntityService.selectors.selectEntities;

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

}
