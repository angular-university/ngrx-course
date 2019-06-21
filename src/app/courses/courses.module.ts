import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CoursesCardListComponent} from './courses-card-list/courses-card-list.component';
import {CourseDialogComponent} from './course-dialog/course-dialog.component';
import {CoursesResolver} from './services/courses-resolver.service';
import {CoursesService} from './services/courses.service';
import {CourseComponent} from './course/course.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CourseEffects} from './course.effects';
import {lessonsReducer} from './lessons.reducers';
import {CourseDataService} from './services/course-data.service';
import {EntityDataModule, EntityDataService, EntityDefinitionService, EntityMetadataMap} from '@ngrx/data';
import {Course} from './model/course';
import {CourseEntityService} from './services/course-entity.service';


export const coursesRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      course: CoursesResolver
    }

  },
  {
    path: ':id',
    component: CourseComponent,
    resolve: {
      course: CoursesResolver
    }
  }
];



export function compareCourses(c1:Course, c2: Course) {
  return c1.seqNo - c2.seqNo;
}


const entityMetadata: EntityMetadataMap = {
  Course: {
    sortComparer: compareCourses,
    entityDispatcherOptions: {
      optimisticUpdate: true
    }
  },
};


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    RouterModule.forChild(coursesRoutes),
    StoreModule.forFeature('lessons', lessonsReducer),
    EffectsModule.forFeature([CourseEffects])
  ],
  declarations: [HomeComponent, CoursesCardListComponent, CourseDialogComponent, CourseComponent],
  exports: [HomeComponent, CoursesCardListComponent, CourseDialogComponent, CourseComponent],
  entryComponents: [CourseDialogComponent],
  providers: [
    CoursesService,
    CourseDataService,
    CoursesResolver,
    CourseEntityService
  ]
})
export class CoursesModule {

  constructor(
    entityDataService: EntityDataService,
    courseDataService: CourseDataService,
    eds: EntityDefinitionService) {

    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('Course', courseDataService);




  }


}
