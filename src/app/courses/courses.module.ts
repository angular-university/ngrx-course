import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CoursesCardListComponent} from './courses-card-list/courses-card-list.component';
import {EditCourseDialogComponent} from './edit-course-dialog/edit-course-dialog.component';
import {CoursesResolver} from './services/courses-resolver.service';
import {CoursesHttpService} from './services/courses-http.service';
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
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, Routes} from '@angular/router';
import {CourseDataService} from './services/course-data.service';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap} from '@ngrx/data';
import {Course} from './model/course';
import {CourseEntityService} from './services/course-entity.service';
import {LessonEntityService} from './services/lesson-entity.service';
import {Lesson} from './model/lesson';


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



function compareCourses(c1:Course, c2: Course) {

  const compare = c1.seqNo - c2.seqNo;

  if (compare > 0) {
    return 1;
  }
  else if ( compare < 0) {
    return -1;
  }
  else return 0;

}


function compareLessons(l1:Lesson, l2: Lesson) {

  const compareCourses = l1.courseId - l2.courseId;

  if (compareCourses > 0) {
    return 1;
  }
  else if (compareCourses < 0){
    return -1;
  }
  else {
    return l1.seqNo - l2.seqNo;
  }

}



const entityMetadata: EntityMetadataMap = {
  Course: {

    sortComparer: compareCourses,
    entityDispatcherOptions: {
      optimisticUpdate: true
    }
  },
  Lesson: {
    sortComparer: compareLessons
  }
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
    RouterModule.forChild(coursesRoutes)
  ],
  declarations: [
    HomeComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
    CourseComponent
  ],
  exports: [
    HomeComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
    CourseComponent
  ],
  entryComponents: [EditCourseDialogComponent],
  providers: [
    CoursesHttpService,
    CourseDataService,
    CoursesResolver,
    CourseEntityService,
    LessonEntityService
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
